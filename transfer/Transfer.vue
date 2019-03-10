<template>
  <div>
    <!-- // 你的代码 -->
    ...
    <!-- // 使用树形穿梭框组件 -->
    <tree-transfer width="88%" :title="title" :from_data='fromData' :to_data='toData' :defaultProps="{label:'label'}" @addBtn='add' @removeBtn='remove' :mode='mode' height='240px' filter openAll>
    </tree-transfer>
		<hr><br>
		<tree-transfer width="88%" height='440px' :from_data='fromNameList' :to_data='toNameList' @addBtn='addName' @removeBtn='removeName' mode="transfer"></tree-transfer>
  </div>
</template>

<script>
  import treeTransfer from 'el-tree-transfer' // 引入

  export default {
    data(){
      return{
        title: ["Transfer Tree"],
        mode: "transfer", // transfer addressList
        fromData:[
          {
            id: "1",
            pid: 0,
            label: "一级 1",
            children: [
              {
                id: "1-1",
                pid: "1",
                label: "二级 1-1",
                disabled: true,
                children: []
              },
              {
                id: "1-2",
                pid: "1",
                label: "二级 1-2",
                children: [
                  {
                    id: "1-2-1",
                    pid: "1-2",
                    children: [],
                    label: "二级 1-2-1"
                  },
                  {
                    id: "1-2-2",
                    pid: "1-2",
                    children: [],
                    label: "二级 1-2-2"
                  }
                ]
              }
            ]
          },
        ],
        toData:[],
				fromNameList:[
					{
						id: "1a",
						pid: 0,
						label: "yuyue",
					},
					{
						id: "2a",
						pid: 2,
						label: "zhangsan",
					},
					{
						id: "3a",
						pid: 3,
						label: "lisi",
					},
				],
				toNameList:[]
      }
    },
    methods:{
      // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
      changeMode() {
        if (this.mode == "transfer") {
          this.mode = "addressList";
        } else {
          this.mode = "transfer";
        }
      },
      // 监听穿梭框组件添加
      add(fromData,toData,obj){
        // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
        // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
        console.log("fromData:", fromData);
        console.log("toData:", toData);
        console.log("obj:", obj);
      },
      // 监听穿梭框组件移除
      remove(fromData,toData,obj){
        // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
        // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
        console.log("fromData:", fromData);
        console.log("toData:", toData);
        console.log("obj:", obj);
      },
			addName(fromData,toData,obj){
				console.log("addName----fromData:", fromData);
				console.log("toData:", toData);
				console.log("obj:", obj);
			},
			removeName(fromData,toData,obj){
				console.log("removeName-----fromData:", fromData);
				console.log("toData:", toData);
				console.log("obj:", obj);
			}
    },
    components:{ treeTransfer } // 注册
  }
</script>

<style>

</style>