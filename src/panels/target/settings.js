import React from 'react';
import { Panel, Placeholder, PanelHeader, PanelHeaderBack, Button, FormLayout,
         File, FormLayoutGroup, Input, Textarea, Select, Div } from '@vkontakte/vkui';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';

class CreationTargetSettings extends React.Component {

  changeImage = (image, place) => {
    let container = <img src={window.URL.createObjectURL(image)}/>;
		this.props.data.image = container;
    this.props.commit(this.props.data);
  }

  removeImage = () => {
		this.props.data.image = null;
    this.props.commit(this.props.data);
  }

  onNameChange = (value) => {
    this.props.data.name = value;
    this.props.commit(this.props.data);
  }

  onAmountChange = (value) => {
    this.props.data.amount = value;
    this.props.commit(this.props.data);
  }

  onPurposeChange = (value) => {
    this.props.data.purpose = value;
    this.props.commit(this.props.data);
  }

  onDescriptionChange = (value) => {
    this.props.data.description = value;
    this.props.commit(this.props.data);
  }

  render() {
    let data = this.props.data;
    let canGo = data.name && data.amount && data.purpose && data.description && data.image;

    return (
      <Panel id={this.props.id} separator={false}>
        <PanelHeader separator={false} left={<PanelHeaderBack onClick={this.props.goBack}/>}>Целевой сбор</PanelHeader>
        <div className='flex'>
          <div className={data.image ? 'flex Image' : 'flex Image Unuploaded'}>
            { !data.image ?
                <div className='flex centered FileInput'>
                  <File onChange={e => {this.changeImage(e.target.files[0])}} accept='image/jpeg,image/png' mode='tertiary' className='flex' before={<Icon28PictureOutline/>}>
                    Загрузить обложку
                  </File>
                </div>
              :
                data.image
            }

            {
              data.image &&
                <Button mode='tertiary' className='RemoveButton' onClick={this.removeImage}><Icon24DismissOverlay/></Button>
            }

          </div>
        </div>

        <FormLayout>
          <FormLayoutGroup top='Название сбора'>
            <Input placeholder='Название сбора' value={data.name} onChange={e => {this.onNameChange(e.target.value)}}/>
          </FormLayoutGroup>

          <FormLayoutGroup top='Сумма, ₽'>
            <Input placeholder='Сколько нужно собрать?' type='number' value={data.amount} onChange={e => {this.onAmountChange(e.target.value)}}/>
          </FormLayoutGroup>

          <FormLayoutGroup top='Цель'>
            <Input placeholder='Например, лечение человека' value={data.purpose} onChange={e => {this.onPurposeChange(e.target.value)}}/>
          </FormLayoutGroup>

          <FormLayoutGroup top='Описание'>
            <Textarea placeholder='На что пойдут деньги и как они кому-то помогут?' className='Description' grow={false} value={data.description} onChange={e => {this.onDescriptionChange(e.target.value)}}/>
          </FormLayoutGroup>

          <FormLayoutGroup top='Куда получать деньги'>
            <Select selected='vk_pay'>
              <option value='vk_pay'>Счёт VK Pay · 1234</option>
            </Select>
          </FormLayoutGroup>
        </FormLayout>

        <Div>
          <Button onClick={() => this.props.go('creation-target-decoration')} disabled={!canGo} stretched size='xl'>
            Далее
          </Button>
        </Div>

      </Panel>
    )
  }
}

export default CreationTargetSettings;
