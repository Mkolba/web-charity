import React from 'react';
import { Panel, Placeholder, PanelHeader, PanelHeaderBack, Button, FormLayout, Separator, Progress, Cell,
         File, FormLayoutGroup, Input, Textarea, Select, Div, Radio, FixedLayout, Avatar } from '@vkontakte/vkui';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24View from '@vkontakte/icons/dist/24/view';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';

import './page.css';


class Page extends React.Component {

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
      <div className='Page'>
        <div className='image'>
          {data.image}
        </div>

        <Div>
          <div className='Page__info'>
            <div className='Page__header'>{data.name}</div>
            <div className='Page__author'>Автор {user}</div>
            <div className='Page__date'>Закончится через 5 дней</div>
          </div>

          <div className='separator' style={{ margin: '12px 0' }}/>

          <div className='Page__progress'>
            <Progress top='Нужно собрать 10 000' type='top'/>
          </div>

          <div className='separator' style={{ margin: '12px 0' }}/>

          <div className='Page__description'>
            {data.description}
          </div>

          <div className='separator'  style={{ marginTop: 12 }}/>

          <div className='Post__footer'>
            <div className='Post__Icon' style={{ paddingLeft: 0 }}>
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

            <div className='Post__Icon' style={{ paddingRight: 0 }}>
              <Icon24View />
              <span className='Post__Icon__Text'>7.4K</span>
            </div>

          </div>

        </Div>

        <div className='separator' style={{ marginTop: -12 }}/>

        <Cell description='Отправил.' before={<Avatar size={44}/>}>Алексей Мазелюк <span style={{ color: 'gray', fontSize: 12 }}>5 мин</span></Cell>

        <div style={{ height: 40 }}/>

        <FixedLayout filled vertical='bottom'>
          <Separator wide/>
          <Div style={{ paddingTop: 6, paddingBottom: 6 }}>
            <div className='Snippet__footer'>
              <div className='Snippet__progress'>
                <div className='Snippet__progress__header'>
                  Собрано 5 000 ₽ из 10 000 ₽
                </div>
                <Progress value={50}/>
              </div>
              <Button mode='outline' onClick={this.props.onClick} disabled={this.props.disabled}>Помочь</Button>
            </div>
          </Div>
        </FixedLayout>
      </div>
    )
  }
}

export default Page;
