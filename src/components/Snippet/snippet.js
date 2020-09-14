import React from 'react';
import { Progress, Card, Button } from '@vkontakte/vkui';
import './snippet.css';

class Snippet extends React.Component {
  render() {
    return (
      <div className='flex'>
        <Card className='Snippet' mode='outline'>
          <div className='Snippet__image'>
            {this.props.image}
          </div>

          <div className='Snippet__content'>
            <div className='Snippet__body'>
              <div className='Snippet__header'>{this.props.header}</div>
              <div className='Snippet__description'>{this.props.description}</div>
            </div>
            <div className='Snippet__separator' />
            <div className='Snippet__footer'>
              <div className='Snippet__progress'>
                <div className='Snippet__progress__header'>
                  {this.props.progress}
                </div>
                <Progress value={this.props.value}/>
              </div>
              <Button mode='outline' onClick={this.props.onClick} disabled={this.props.disabled}>Помочь</Button>
            </div>
          </div>

        </Card>
      </div>
    )
  }
}

export default Snippet;
