import React from 'react';
import { Panel, Placeholder, PanelHeader, Button, PanelHeaderBack } from '@vkontakte/vkui';
import Snippet from '../../components/Snippet/snippet';

class CreationTargetPosting extends React.Component {
  render() {
    let data = this.props.data;
    let user = this.props.user;
    let username = user ? `${user.first_name} ${user.last_name}` : 'Иван Иванов';
    let description = username  + ' · Закончится через 5 дней'


    return (
      <Panel id={this.props.id} separator={false}>
        <PanelHeader separator={false} left={<PanelHeaderBack onClick={this.props.goBack}/>}>Публикация</PanelHeader>
        <Placeholder action={<Button onClick={() => this.props.go('creation-target-newsfeed')}>Далее</Button>}>
          Здесь мог бы быть постинг, но ВКонтакте не предоставляет API для генерации сниппетов.
        </Placeholder>
        <Snippet header={data.name} description={description} progress='Помогите первым' value={0} disabled image={data.image}/>
      </Panel>
    )
  }
}

export default CreationTargetPosting;
