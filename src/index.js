import React from "react";
import ReactDOM from "react-dom";
import { marked } from "marked";

const initialState =
  /*`
this is paragraph

**this is bolded text**
. BlockQuotes!
# heading 
## heading 2

- list item 1
- list item 2

[visit my github]()

this is inline \`<div></div>\`

this is a block of code

\`\`\`
let x=2;
let y= 33;
\`\`\`

![hearts](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._XGhH_W1_WN94AC69AsnKQHaGf%26pid%3DApi&f=1&ipt=0a5786b62d0c8293d60d3fae451cf4cde5ef7533b0533861a42ca48c14dafc77&ipo=images)
`*/
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

class App extends React.Component {
  state = {
    text: initialState,
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h1 className="text-center">convert your markdown</h1>

        <div className="row">
          <div className="col-6">
            <h6>Enter your markdown here</h6>
            <textarea
              id="editor"
              className="form-control p-2 "
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6">
            <h6>Result is here</h6>
            <div
              className="preview rounded"
              dangerouslySetInnerHTML={{ __html: markdown }}
              id="preview"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
