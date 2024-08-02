
import React from 'react'
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react'
import './ContactInfo.css'

const ContactInfo = () => (
    <div className='ContactContainer'>
        <h3>DEV@DEAKIN 2024</h3>
        <List>
            <ListItem>
                <ListIcon name='users' />
                <ListContent>
                    Student Help
                </ListContent>
            </ListItem>
            <ListItem>
                <ListIcon name='marker' />
                <ListContent>
                    Locations
                </ListContent>
            </ListItem>
            <ListItem>
                <ListIcon name='mail' />
                <ListContent>
                <a href='mailto:jack@semantic-ui.com'>Send us an Email!</a>
                </ListContent>
            </ListItem>
            <ListItem>
                <ListIcon name='linkify' />
                <ListContent>
                <a href='http://www.semantic-ui.com'>deakin.com.au</a>
                </ListContent>
            </ListItem>
        </List>
    </div>
 
)

export default ContactInfo