import React from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

class SongList extends React.Component {
   state = { title: [], artist: [] };

   componentDidMount() {
       axios.get(`/api/billboards/:billboard_id/songs`)
        .then(res => {
            this.setState({ title: res.data })
        })
        .catch( res => {
            console.log(res.data);
        });
   }

   render() {
       const { title, artist } = this.state;
       return(
            <List>
                { title }
            </List>
            
       )
   }
}


export default SongList;