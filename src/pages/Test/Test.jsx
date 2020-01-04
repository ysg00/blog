import React, { Component } from 'react';
import Page from 'components/Page/Page';
// import ReactMarkdown from 'react-markdown/with-html';
// import src from 'mds/test_blog.md';


class Test extends Component {
  showfile = async () => {
    const reader = new FileReader();
    reader.onload = async (e) => { 
      const text = (e.target.result);
      console.log(text);
      // alert(text);
      reader.readAsText(e.target.files[0]);
    };
  }

  render() {
    return (
      <Page pageTitle="Test Page" className="test">
        <input type="file" onChange={(e) => this.showFile(e)} />
      </Page>
    );
  }
}

export default Test;