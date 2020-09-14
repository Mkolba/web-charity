import React from 'react';
import { Panel, Placeholder, PanelHeader, PanelHeaderBack, Button, FormLayout,
         File, FormLayoutGroup, Input, Textarea, Select, Div, Radio, FixedLayout } from '@vkontakte/vkui';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';


import Page from '../../components/Page/page.js';

class CreationTargetPage extends React.Component {

  onDateChange = (value) => {
    this.props.data.date = value;
    this.props.commit(this.props.data);
  }

  onEndChange = (value) => {
    this.props.data.end = value;
    this.props.commit(this.props.data);
  }


  render() {
    let data = this.props.data;
    let canGo = data.end !== 'onDate' || data.date

    let user = this.props.user ? `${this.props.user.first_name} ${this.props.user.last_name}` : 'Иван Иванов'

    return (
      <Panel id={this.props.id} separator={false}>
        <Page {...this.props} />
      </Panel>
    )
  }
}

export default CreationTargetPage;
