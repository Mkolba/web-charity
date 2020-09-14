import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './dist/index.css';
import bridge from '@vkontakte/vk-bridge';


import Home from './panels/home';
import CreationType from './panels/creationType';
import CreationTargetSettings from './panels/target/settings';
import CreationTargetDecoration from './panels/target/decoration';
import CreationTargetPosting from './panels/target/posting';
import CreationTargetNewsfeed from './panels/target/newsfeed';
import CreationTargetPage from './panels/target/page';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'home',
			monthlyData: {},
			targetData: {end: 'onDate'},
			history: ['home'],
			user: {}
		}
	}

	componentDidMount() {
		window.onpopstate = this.goBack;

		bridge.subscribe(({ detail: { type, data }}) => {
	    if (type === 'VKWebAppUpdateConfig' && data.scheme) {
	      this.setScheme(data.scheme);
			}
  	})

		bridge.send("VKWebAppGetUserInfo").then(response => {
			this.setState({user: response});
		})

	}

	setScheme = (scheme) => {
		let isLight = ['bright_light', 'client_light'].includes(scheme);
		this.setState({ scheme: isLight ? 'bright_light' : 'space_gray' });
		document.getElementById('app__body').setAttribute('scheme', scheme);
		bridge.send('VKWebAppSetViewSettings', {
				 'status_bar_style': isLight ? 'dark' : 'light',
				 'action_bar_color': isLight ? '#ffffff' : '#191919',
				 'navigation_bar_color': isLight ? '#ffffff' : '#191919',
		}).catch(e => {});
	}

	commit = (data, place) => {
		if (place === 'target') {
			this.setState({ targetData: data })
		} else {
			this.setState({ monthlyData: data })
		}

	}

	go = (panel) => {
		window.history.pushState({panel: panel}, panel);
		this.setState({ history: [...this.state.history, panel], activePanel: panel })
	}

	goBack = () => {
		let history = this.state.history;

		if (history.length === 1) {
      bridge.send("VKWebAppClose", {"status": "success" });
		} else {
			if (history[history.length - 1] === 'home.modal') {
				this.setState({ activeModal: null });
			} else {
				this.setState({ activePanel: history[history.length - 2] });
			}
			history.pop();
		}

	}

	render() {
		const props = {go: this.go, goBack: this.goBack}

		return (
			<View activePanel={this.state.activePanel} header={!(this.state.activePanel.indexOf('page') > -1)}>
				<Home id='home' {...props} image={this.state.targetData.image}/>
				<CreationType id='creation-type' {...props}/>

				<CreationTargetSettings id='creation-target-settings' data={this.state.targetData} {...props} commit={(data) => this.commit(data, 'target')}/>
				<CreationTargetDecoration id='creation-target-decoration' data={this.state.targetData} {...props} commit={(data) => this.commit(data, 'target')} user={this.state.user}/>
				<CreationTargetPosting id='creation-target-posting' {...props} data={this.state.targetData} user={this.state.user}/>
				<CreationTargetNewsfeed id='creation-target-newsfeed' {...props} data={this.state.targetData} user={this.state.user}/>
				<CreationTargetPage id='creation-target-page' {...props} data={this.state.targetData} user={this.state.user}/>

				{//<CreationMonthlySettings id='creation-target-settings' {...props} />
				}

			</View>
		);
	}
}

export default App;
