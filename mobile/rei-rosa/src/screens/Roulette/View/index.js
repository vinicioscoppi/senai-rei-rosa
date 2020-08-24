import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Roulette extends Component {
  injectjs() {
    let jsCode = 'alert(hello)';
    return jsCode;
  }

  render() {
    return (
      <WebView 
        ref={'webview'} 
        automaticallyAdjustContentInsets={false} 
        javaScriptEnabled={true}
        injectedJavaScript={this.injectjs()} 
        source={ 
          require('../../../assets/roullete.html') 
        } 
      />
    );
  }
}
/*       
`<iframe
    src="https://wheeldecide.com/e.php?c1=1&c2=2&c3=3&c4=4&c5=5&c6=6&cols=ff0000,0000ff&t=Roleta&time=5&tcol=fbfd00&width=300"
    width="500"
    height="500"
    scrolling="no"
    frameborder="0"
></iframe>`

//

<ScrollView style={{ flex: 1 }}>
    <HTML
        html={htmlContent}
        imagesMaxWidth={Dimensions.get('window').width}
    />
</ScrollView>
*/