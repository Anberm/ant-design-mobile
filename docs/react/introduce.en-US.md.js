webpackJsonp([54,155],{650:function(n,s){n.exports={content:["article",["p",["code","antd-mobile"]," is the React implementation of the ",["a",{title:null,href:"http://ant.design"},"Ant Design"],"'s mobile specification, serving the ant and koubei wireless service."],["div",{"class":"pic-plus"},["img",{width:"160",src:"https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pic-plus {\n  margin: 40px 0;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 40px;\n}\n"],["h2","Features and Advantages"],["ul",["li",["p","The UI is fully Configurable and Scalable, easily adapt to all kinds of product style."]],["li",["p","Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes."]],["li",["p",'Built-in "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.']],["li",["p","Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development."]]],["h2","Applicable Scenes"],["ul",["li",["p","Medium-sized and large-scale applications."]],["li",["p","Multi-terminal applications based on react / react-native."]],["li",["p","Custom UI-style applications."]]],["h2","Getting Started"],["blockquote",["p","Before delving into Ant Design React, a good knowledge of ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," and ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"]," is needed."],["p","Make sure that you had installed ",["a",{title:null,href:"https://nodejs.org/en/"},"Node.js"],"(> v4.x) correctly."]],["h3","1. Create a New Project"],["p","Can be an existing project, or a newly created empty item, but it is recommended to copy and modify it from the official example ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web"},"scaffolding"],"."],["blockquote",["p","More official ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples"},"examples"],".\nAlso, you can use any ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"scaffold"]," available in React ecosystem."]],["h3","2. Installation"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd-mobile --save\n$ <span class="token function">npm</span> <span class="token function">install</span> babel-plugin-import --save-dev'},["code","$ npm install antd-mobile --save\n$ npm install babel-plugin-import --save-dev"]],["h3","3. Usage"],["blockquote",["p","If you encounter an error, please refer ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/56"},"#56"]," and ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples"},"Samples"]," first."],["p","How antd-mobile deal with web & react-native components? Please see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/How-antd-mobile-deal-with-web-and-react-native-code-%3F"},"Wiki"]]],["h4","Web usage"],["blockquote",["p","The following doc based on ",["code","webpack@1.x"]," version, if you are using webpack@2.x, please see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/516#issuecomment-293632772"},"#516"]]],["ul",["li",["p","install webpack loader deps"],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> i style-loader css-loader <span class="token function">less</span> less-loader svg-sprite-loader@0.3.1 --save-dev'},["code","npm i style-loader css-loader less less-loader svg-sprite-loader@0.3.1 --save-dev"]]]],["blockquote",["p",["code","antd-mobile@1.x"]," require ",["code","svg-sprite-loader@^0.3.1"]," , see ",["a",{title:null,href:"https://mobile.ant.design/changelog#1.2.0"},"detail info"]]],["ul",["li",["p","Set the ",["code","resolve"]," field on webpack configuration file to load web&native components automaticlly."],["pre",{lang:null,highlighted:'resolve<span class="token punctuation">:</span> {\n  modulesDirectories<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'node_modules\'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'../node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'.web.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n}<span class="token punctuation">,</span>'},["code","resolve: {\n  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],\n  extensions: ['', '.web.js', '.js', '.json'],\n},"]]],["li",["p","Use the ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," to support component to load on demand:"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc</span>\n<span class="token punctuation">{</span><span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span> <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">// or webpack config file</span>\nwebpackConfig<span class="token punctuation">.</span>babel<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'import\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token string">\'css\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'// .babelrc\n{"plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]}\n// or webpack config file\nwebpackConfig.babel.plugins.push([\'import\', { libraryName: \'antd-mobile\', style: \'css\' }]);']]]],["blockquote",["p","If you are curious about why we need babel-plugin-import , see ",["a",{title:null,href:"https://ant.design/docs/react/getting-started#Import-on-Demand"},"Import on Demand"]]],["ul",["li",["p","all icon of antd-mobile are svg file, so you need to set ",["a",{title:null,href:"https://github.com/kisenka/svg-sprite-loader"},"svg-sprite-loader"],", see ",["a",{title:null,href:"https://mobile.ant.design/components/icon"},"Icon docs"]," for details."]],["li",["p","Entry html page Required settings:"],["ul",["li",["p","since antd-mobile css use ",["code","rem"],", you need to add viewport scale and html fontSize setting scripts to your html header, see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/Antd-Mobile-viewport-setting-wiki"},"Antd-Mobile-viewport-setting-wiki"]," for details."]],["li",["p","Add ",["a",{title:null,href:"https://github.com/ftlabs/fastclick"},"FastClick"]," (ref ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/576"},"#576"],")"]],["li",["p","Use Promise fallback support (some Android phones do not support Promise), as follows:"],["pre",{lang:"js",highlighted:'<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>Promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">writeln</span><span class="token punctuation">(</span><span class="token string">\'&lt;script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"\'</span><span class="token operator">+</span><span class="token string">\'>\'</span><span class="token operator">+</span><span class="token string">\'&lt;\'</span><span class="token operator">+</span><span class="token string">\'/\'</span><span class="token operator">+</span><span class="token string">\'script>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","if(!window.Promise) {\n  document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n}"]]]]]],["p","Example of usage:"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// Auto import js and css modularly, parsed by babel-plugin-import</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","// Auto import js and css modularly, parsed by babel-plugin-import\nimport { Button } from 'antd-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"]],["blockquote",["p","Other useful resources: ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pull/758"},"Server-side rendering discussion"]," /\n",["a",{title:null,href:"https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md"},"Custom theme"],"."],["p","Your custom UI library based on antd-mobile: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui"},"web-custom-ui"]," / ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro"},"web-custom-ui-pro"]]],["h4","React-Native usage"],["blockquote",["p","Note: ",["code","Table"],"/",["code","Menu"],"/",["code","NavBar"]," does not have React-Native implementation."]],["ul",["li",["p","Edit ",["code",".babelrc"]," as follows:"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span><span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"antd-mobile"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span>'},["code",'{"plugins": [["import", { "libraryName": "antd-mobile" }]]}']]]],["p","Example of usage:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">HelloWorldApp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nAppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token string">\'HelloWorldApp\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> HelloWorldApp<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Button } from 'antd-mobile';\n\nclass HelloWorldApp extends Component {\n  render() {\n    return <Button>Start</Button>;\n  }\n}\n\nAppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);"]],["blockquote",["p","More common questions, please see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki"},"wiki pages"],"."]],["h2","Version"],["ul",["li",["p","Stable: ",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","Beta: ",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"https://cnpmjs.org/badge/v/antd-mobile.svg?&tag=beta&subject=npm",alt:"npm package"}]]]]],["h2","Size"],["ul",["li",["p","Components are loaded on demand, in other words, components that are not imported are not packed."]],["li",["p",["a",{href:"https://ant-design.github.io/ant-design-analysis/",target:"_blank"},"The size and dependency analysis"]," of `./dist/antd-mobile.min.js`"]]],["h2","Environment Support"],["ul",["li",["p",["code","iOS"]]],["li",["p",["code","Android 4.0+"]]]],["h2","Links"],["ul",["li",["p",["a",{title:null,href:"https://mobile.ant.design/"},"Home Page"]]],["li",["p",["a",{title:null,href:"http://github.com/ant-design/ant-design-mobile/blob/master/development.en-US.md"},"Developer Instruction"]]],["li",["p",["a",{title:null,href:"http://github.com/react-component"},"React components"]]]],["h2","Companies using antd-mobile"],["ul",["li",["p",["a",{title:null,href:"http://www.antgroup.com/index.htm?locale=en_US"},"Ant Financial"]]],["li",["p",["a",{title:null,href:"http://www.alibaba.com/"},"Alibaba"]]],["li",["p",["a",{title:null,href:"http://www.koubei.com/"},"Koubei"]]]],["h2","Contributing"],["p","Please read our ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING.md"]," first."],["p","If you'd like to help us improve antd-mobile, just create a ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pulls"},"Pull Request"],". Feel free to report bugs and issues ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/new"},"here"],"."],["blockquote",["p","If you're new to posting issues, we ask that you read ",["a",{title:null,href:"http://www.catb.org/~esr/faqs/smart-questions.html"},["em","How To Ask Questions The Smart Way"]]," and ",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"How to Ask a Question in Open Source Community"]," and ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/~sgtatham/bugs.html"},"How to Report Bugs Effectively"]," prior to posting. Well written bug reports help us help you!"]],["h2","Need Help?"],["p","For questions on how to use antd, please post questions to ",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"stackoverflow"]," using the ",["code","antd"],"/",["code","antd-mobile"]," tag. If you're not finding what you need on stackoverflow, you can find us on ",["a",{title:null,href:"https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"},"gitter"]," as well."],["p","As always, we encourage experienced users to help those who are not familiar with ",["code","antd"],"!"],["ol",["li",["p",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"Stack Overflow"]]],["li",["p",["a",{title:null,href:"https://segmentfault.com/t/antd"},"Segment Fault"]]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"},["img",{title:null,src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/ant-design/ant-design"}]]]]]],meta:{order:0,english:"Ant Design Mobile of React",filename:"docs/react/introduce.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Features-and-Advantages",title:"Features and Advantages"},"Features and Advantages"]],["li",["a",{className:"bisheng-toc-h2",href:"#Applicable-Scenes",title:"Applicable Scenes"},"Applicable Scenes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Getting-Started",title:"Getting Started"},"Getting Started"]],["li",["a",{className:"bisheng-toc-h2",href:"#Version",title:"Version"},"Version"]],["li",["a",{className:"bisheng-toc-h2",href:"#Size",title:"Size"},"Size"]],["li",["a",{className:"bisheng-toc-h2",href:"#Environment-Support",title:"Environment Support"},"Environment Support"]],["li",["a",{className:"bisheng-toc-h2",href:"#Links",title:"Links"},"Links"]],["li",["a",{className:"bisheng-toc-h2",href:"#Companies-using-antd-mobile",title:"Companies using antd-mobile"},"Companies using antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#Contributing",title:"Contributing"},"Contributing"]],["li",["a",{className:"bisheng-toc-h2",href:"#Need-Help?",title:"Need Help?"},"Need Help?"]]]}}});