import React,{Component} from "react";
import axios from "axios";
import './index.css';
import { Modal, Button } from 'antd';
class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			apis:[],
			tags:[]
		}
	}
	showModal = () => {
	    this.setState({
	      visible: true,
	    });
	  }

	  handleOk = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
	  }

	  handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
	  }
	render(){
		return <div id="Home">
			<input type='text' className="search" placeholder="搜索" id="serach" onInput={this.handleChange.bind(this)} ref="input"/>
			<table>
				<tr className="tou">
					<th>名字</th>
					<th>详情</th>
					<th>image</th>
					<th>tags</th>
					<th>baseURL</th>
					<th>操作</th>
				</tr>
				{
					this.state.apis.map((item)=>
						<tr className="shenzi">
							<td className="name">{item.name}</td>
							<td className="description">{item.description}</td>
							<td className="image">
								<img src={item.image} alt=""/>
							</td>
							<td className="tags">
								{
									item.tags.map((item) => 
										<span>{item}</span>
									)
								}
							
							</td>
							<td className="baseURL">
								<a href={item.baseURL}>链接</a>
							</td>
							<td className="caozuo">
								<Button type="primary" onClick={this.showModal}>
								         操作
								</Button>
						        <Modal
						          title="Basic Modal"
						          visible={this.state.visible}
						          onOk={this.handleOk}
						          onCancel={this.handleCancel}
						        >
						          <ul>
						          	{
					          			item.properties.map((item)=>
					          				<li>
					          					<span>{item.type}</span>
					          					<a href={item.url}>链接</a>
					          				</li>
					          				)
						          	}
						          
						          </ul>
						        </Modal>

							</td>
						</tr>
					)
				}
			</table>
		</div>
	}
	componentDidMount(){
		axios.get('http://www.mocky.io/v2/5be3ced42f00006d00d9f13b').then(res=>{
			console.log(res.data.apis);
			this.setState({
				apis:res.data.apis,
				tags:res.data.apis.tags
			})
		})
	}
	handleChange(input){
		var text = "";
		//实时筛选，不用点击按钮
			text = this.refs.input.value;//获取文本框输入
			if(text !==""){
				//this.state.apis.filter(text)
				for(var i=0 ;i<this.state.apis.length;i++){
					
					for(var g=0; g<this.state.apis[i].tags.length ;g++){
						
						if (this.state.apis[i].tags[g].indexOf(text)== -1) {
								this.setState({
									apis:this.state.apis.splice(i,1)
								})
						}
					}
				}
				//console.log(this.state.apis.length);
			}else{
				this.setState({
					apis:this.state.apis
				})
			}
		//console.log(this.refs.input.value);
	}
}


export default Home;