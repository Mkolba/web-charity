import React from 'react';
import { Panel, Placeholder, PanelHeader, Button } from '@vkontakte/vkui';



class Home extends React.Component {

  render() {
    return (
      <Panel id={this.props.id}>
        <PanelHeader>Пожертвования</PanelHeader>
        <Placeholder stretched action={
          <Button onClick={() => this.props.go('creation-type')}>Создать сбор</Button>
        }>
          У Вас пока нет сборов.<br/>Начните доброе дело.
        </Placeholder>
      </Panel>
    )
  }
}

export default Home;
