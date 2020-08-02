import React, {Component} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

//import styles from './FileUplpader.module.css';

class FileUploader extends Component {

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null,
            currentFile: null,
            loaded: 0,
            hasFinished: false
          }
    }

    checkFileMimeType = (file) => {
        // list of allowed mime types
        const types = ['application/json'];
        //define message container
        const err = (types.every( elem => file.type !== elem ))  
            ? file.type + ' is not a supported format\n' : '';
        
        if (err !== '') { 
            toast.error(err);
            return false; 
        }

        return true;
    }

    checkFileSize = (file) => {
        const size = 100000000; //100MB
        const err = (file.size > size) 
            ? file.name +'is too large, please pick a smaller file\n' : ''; 
    
        if (err !== '') {
            toast.error(err);
            return false;
        }
        
        return true;
    }

    onChangeHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);

        if (this.checkFileMimeType(file) && this.checkFileSize(file)) {
            this.setState({
                selectedFile: file,
                loaded: 0,
            });
        } else {
            event.target.value = null // discard selected file
            this.setState({
                selectedFile: null,
                loaded: 0,
            });
        }

        this.setState({hasFinished: false});
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        axios.post("/api/upload", data, {
            onUploadProgress: progressEvent => {
                this.setState({
                    loaded: (progressEvent.loaded / progressEvent.total * 100),
                })
            },
        })
        .then(res => {
            console.log(res.data.filename);
            this.setState({currentFile: res.data.filename, selectedFile: null});
            toast.success('Upload successful :)');
        })
        .catch(error => {
            console.log(error.response)
            this.setState({selectedFile: null});
            toast.error('Upload failed :(');
        });
    }

    render() {
        return (<div class="container">
            <div class="row">
                <div class="offset-md-3 col-md-6">
                   { this.state.currentFile &&
                       <div style={{boxSizing: "border-box", fontWeight: "bold", border: "3px dotted"}}>
                            {this.state.currentFile} is currently loaded
                         </div>
                    }
 
                    <br/>
                    <div class="form-group files">
                        <label>Upload your file</label>
                        <input type="file" 
                            class="form-control" 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <div class="form-group">
                        <ToastContainer hideProgressBar={true}/>
                    </div>
                    { this.state.selectedFile &&
                      <button type="button" 
                            class="btn btn-success btn-block" 
                            onClick={this.onClickHandler}>Upload</button>
                    }
                </div>
            </div>
        </div>);
    }
}

export default FileUploader;