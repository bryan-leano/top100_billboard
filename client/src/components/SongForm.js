import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class SongForm extends React.Component {
    state = { billboardId: 1, title: '', artist: '' };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value }); 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`/api/billboards/${this.state.billboardId}/songs`, { ...this.state  })
    }

    render () {
        const { title, artist } = this.state; 
        return (
            <Form onSubmit = {this.handleSubmit}>
            <Form.Field>
              <label>Title</label>
              <input 
              value= { title }
              name='title'
              placeholder='Title Name' 
              onChange = { this.handleChange }
              />
            </Form.Field>
            <Form.Field>
              <label>Artist</label>
              <input 
              value= { artist }
              name='artist'
              placeholder='Artist Name' 
              onChange = { this.handleChange }
              />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}

export default SongForm;