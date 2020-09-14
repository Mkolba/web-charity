import React from 'react';
import { Panel, Placeholder, PanelHeader, PanelHeaderBack, Banner } from '@vkontakte/vkui';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';

class CreationType extends React.Component {
  render() {
    return (
      <Panel id={this.props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={this.props.goBack}/>}>Тип сбора</PanelHeader>
        <div className='flex centered'>
          <Banner className='Banner--type'
            header="Целевой сбор"
            subheader="Когда есть определённая цель"
            asideMode="expand"
            onClick={() => this.props.go('creation-target-settings')}
            before={<Icon28TargetOutline fill='#3F8AE0'/>}
          />

          <Banner className='Banner--type'
            header="Регулярный сбор"
            subheader="Если помощь нужна ежемесячно"
            asideMode="expand"
            onClick={() => this.props.go('creation-regular-settings')}
            before={<Icon28CalendarOutline fill='#3F8AE0' />}
          />
        </div>
      </Panel>
    )
  }
}

export default CreationType;
