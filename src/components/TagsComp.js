import React, { Component } from 'react';
import Tags from '@yaireo/tagify/dist/react.tagify'

class TagsComp extends Component {
    tagifySettings = {
        blacklist : ['xxx', 'yyy', 'zzz'],
        maxTags : 6,
        backspace : "edit",
        addTagOnBlur : false,
        dropdown : {
          enabled : 1 // always show suggestions dropdown
        }
    }

  state = {}

// lets set here any of Tagify settings 
    state = {}

    componentDidMount(){
        // simulate netword delay
        setTimeout(()=>{   
            // do some ajax, get whitelist array of all allowed tags, then set it onto the State
            // set "showDropdown" to some value, which will filter the dropdown by that value
            const whitelistFromServer = ["aaa","aaa1","aaa2","aaa3","bbb1","bbb2","bbb3","bbb4"];
            this.setState({ whitelist:whitelistFromServer, showDropdown:"a" })
        }, 2000)
        
        // simulated "ajax" delay
        setTimeout(()=>{  
            // get last added tags, then set it onto the State
            const currentTagsFromServer = ["foo", "bar", "baz"];
            this.setState({ value:currentTagsFromServer })
        }, 1500)
        
        // simulated state change where some tags were deleted
        setTimeout(()=>{  
            this.setState({ value:["bar"] })
        }, 5000)
    }

    callback(e){
        console.log(`%c ${e.type}: `, 'background: #222; color: #bada55', e.detail)
    }

    render(){       
        // callbacks props (for this demo, the same callback reference is assigned to every event type)
        const callbacks = {
            add     : this.callback,
            remove  : this.callback,
            input   : this.callback,
            edit    : this.callback,
            invalid : this.callback,
            click   : this.callback
        }
        
        // merged tagify settings (static & dynamic)
        const settings = {
            ...this.tagifySettings,
            callbacks : callbacks,
            whitelist : this.state.whitelist || []
        }
        
        // initial value
        const {value, showDropdown} = this.state;
        
        return (
            <Tags mode='textarea' settings={settings} value={value} showDropdown={showDropdown} />
        )
    }
}


export default TagsComp