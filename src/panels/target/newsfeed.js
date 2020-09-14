import React from 'react';
import { Panel, Placeholder, PanelHeader, PanelHeaderBack, Button, FormLayout,
         File, FormLayoutGroup, Input, Textarea, Select, Div, Cell, Avatar } from '@vkontakte/vkui';

import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24View from '@vkontakte/icons/dist/24/view';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';

import Snippet from '../../components/Snippet/snippet';


class CreationTargetNewsfeed extends React.Component {

  render() {
    let data = this.props.data;
    let user = this.props.user;
    let username = user ? `${user.first_name} ${user.last_name}` : 'Иван Иванов';
    let description = username  + ' · Закончится через 5 дней'


    return (
      <Panel id={this.props.id} separator={false}>
        <PanelHeader separator={false} left={<PanelHeaderBack onClick={this.props.goBack}/>}>Новости</PanelHeader>
        <div className='flex centered'>
          <div className='Post'>
            <Cell before={<Avatar size={44}/>} asideContent={<Icon24MoreHorizontal />} description='Час назад'>Егор Горошкин</Cell>
            <Div>
              Сейчас самое время помочь тем, кто не может попросить о помощи сам.
            </Div>
            <Snippet header={data.name} description={description} progress='Помогите первым' value={0} image={data.image} onClick={() => this.props.go('creation-target-page')}/>
            <div className='Post__footer'>
              <div className='Post__Icon'>
                <Icon24LikeOutline />
                <span className='Post__Icon__Text'>32</span>
              </div>

              <div className='Post__Icon'>
                <Icon24CommentOutline />
                <span className='Post__Icon__Text'>24</span>
              </div>

              <div className='Post__Icon'>
                <Icon24ShareOutline />
                <span className='Post__Icon__Text'>4</span>
              </div>

              <div style={{ flexGrow: 1 }}/>

              <div className='Post__Icon'>
                <Icon24View />
                <span className='Post__Icon__Text'>7.4K</span>
              </div>

            </div>
          </div>
        </div>
      </Panel>
    )
  }
}

export default CreationTargetNewsfeed;
