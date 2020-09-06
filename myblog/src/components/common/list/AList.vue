<template>

  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    
    <div slot="footer"><b>{{antFooter}}</b></div>

    <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
        
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img slot="extra" width="272" alt="logo" :src="'http://127.0.0.1:9991/'+item.imageUrl"/>
      <a-list-item-meta :description="item.title">
        <a slot="title" target="_blank" :href="'http://127.0.0.1:9991/'+item.detailUrl">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="'http://127.0.0.1:9991/'+item.imageUrl" />
      </a-list-item-meta>
      {{ item.content }}

    </a-list-item>
  </a-list>

</template>
<script>
// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://www.antdv.com/',
//     title: `ant design vue part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

export default {
  data() {
    return {
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 6,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  props:{
        listData:{
          type:Array,
          default:()=>{
            return[];
          }
        },antFooter:{
          type:String,
          default:()=>{
            return "";
          }
        }
      },
};
</script>
<style></style>
