import React from 'react';
import { Panel, Placeholder, PanelHeader, PanelHeaderBack, Button, FormLayout,
         File, FormLayoutGroup, Input, Textarea, Select, Div, Radio, FixedLayout } from '@vkontakte/vkui';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';


class CreationTargetDecoration extends React.Component {

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
        <PanelHeader separator={false} left={<PanelHeaderBack onClick={this.props.goBack}/>}>Оформление</PanelHeader>

        <FormLayout>
          <FormLayoutGroup top='Автор'>
            <Select selected='user'>
              <option value='user'>{user}</option>
            </Select>
          </FormLayoutGroup>

          <FormLayoutGroup top='Сбор завершится' onChange={e => {this.onEndChange(e.target.value)}}>
            <Radio name='radio' value='onRaise' defaultChecked={data.end === 'onRaise'}>Когда соберём сумму</Radio>
            <Radio name='radio' value='onDate' defaultChecked={data.end === 'onDate'}>В определённую дату</Radio>
          </FormLayoutGroup>

          <FormLayoutGroup top='Дата окончания'>
            <div className='dateInputWrapper'>
              <div className='dateInput'>
                <Input type='date' placeholder='Выберите дату' value={data.date} onChange={e => {this.onDateChange(e.target.value)}} disabled={data.end !== 'onDate'}/>
              </div>
              <div className='Chevron flex'>
                <Icon24Dropdown />
              </div>
            </div>
          </FormLayoutGroup>

        </FormLayout>

        <FixedLayout filled vertical='bottom'>
          <Div>
            <Button onClick={() => this.props.go('creation-target-posting')} disabled={!canGo} stretched size='xl'>
              Создать сбор
            </Button>
          </Div>
        </FixedLayout>

      </Panel>
    )
  }
}

export default CreationTargetDecoration;
