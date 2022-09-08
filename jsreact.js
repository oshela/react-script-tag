//this file contains ways to import a javascript script tag in a react file
//first way:
import ScriptTag from 'react-script-tag';
const Demo = props => (
<ScriptTag type="text/javascript" src="/path/to/resource.js" />
)
//second way:React Helmet
//Helmet is a React component that manages all your changes to the document head. It is another simple, beginner-friendly package that supports both server-side and client-side rendering.

import {Helmet} from "react-helmet";
const Demo = props => (
<div className="application">
            <Helmet>
              <script src="/path/to/resource.js" type="text/javascript" />
            </Helmet>
            ...
        </div>
  
);
//third way
//DOM Method
//Though the above solutions are simple to achieve, it requires us to add additional packages that might bulk up our application. If you have some experience coding, then you can do:
componentDidMount () {
    const script = document.createElement("script");
    script.src = "/path/to/resource.js";
    script.async = true;
    document.body.appendChild(script);
}
//fourth way:React Hooks
//If you are a fan of Hooks in React, then useEffect is a great way to append external JS files. You can read my article on using the Effect Hook.

import { useEffect } from 'react';
const importScript = resourceUrl=> {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};
export default importScript;

