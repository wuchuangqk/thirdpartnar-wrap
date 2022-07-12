<template>
  <div @click="visible = true" class="ad app-flex-center text-center">
    在线咨询
  </div>
  <!-- 弹窗 -->
  <div v-show="visible" class="dialog">
    <div ref="targetRef" class="dialog-main">
      <img src="../assets/yiizsdyy@2x.png" alt="" class="img1">
      <img src="../assets/close-bold@2x.png" alt="" class="close" @click="visible = false">
      <div class=" text-center">
        <p class="fs-28 mt-30">免费诊断账户，领取运营方案</p>
        <p class="desc">10年+互联网行业经验, <br />1000+客户的选择</p>
      </div>
      <div class="px-20">
        <div>
          <input v-model="formData.name" type="text" class="input" placeholder="姓名">
        </div>
        <div>
          <input v-model="formData.phone" type="text" class="input" placeholder="手机号">
        </div>
        <button class="btn" @click="submit">立即提交</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Toast } from 'vant';
import axios from 'axios'
import qs from 'qs'

const visible = ref(false)
const targetRef = ref()
onClickOutside(targetRef, () => {
  visible.value = false
})
const formData = ref({
  name: '',
  phone: '',
})
const submit = () => {
  if (!formData.value.name.trim()) return Toast('请输入您的姓名');
  if (!/^1[0-9]{10}$/.test(formData.value.phone)) return Toast('手机号格式有误');
  const loading = Toast.loading({
    message: '正在提交',
    forbidClick: true,
    loadingType: 'spinner',
  });
  axios({
    url: 'http://nad.bdhuoke.com/other/dyy/add',
    method: 'post',
    params: qs.stringify(formData.value),
  }).then(res => {
    loading.clear()
    if (res.data.code !== 1) return Toast(res.data.msg)
    Toast('提交成功,客服会尽快与您联系')
    visible.value = false
    formData.value.name = ''
    formData.value.phone = ''
  }).catch((err) => {
    loading.clear()
    Toast(err)
  })
}
</script>

<style lang="scss" scoped>
.ad {
  width: .7rem;
  height: .7rem;
  background: #4285F4;
  box-shadow: 0px 0px .24rem 0px rgba(66, 133, 244, 0.5600);
  border-radius: .15rem;
  font-size: .22rem;
  font-weight: bold;
  color: #FFFFFF;
  position: fixed;
  right: .16rem;
  top: 6rem;
}

.dialog {
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .dialog-main {
    background-color: white;
    box-shadow: 0px 0px .27rem 0px rgba(11, 5, 25, 0.2700);
    padding-bottom: .4rem;
    width: 5.16rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .img1 {
    width: 100%;
    height: 1.83rem;
  }

  .close {
    width: .2rem;
    height: .2rem;
    position: absolute;
    top: .14rem;
    right: .07rem;
  }

  .btn {
    display: block;
    width: 100%;
    height: .72rem;
    background: #4285F4;
    color: white;
    font-size: .28rem;
  }

  .input {
    height: .72rem;
    border: 1px solid #BFBFBF;
    outline: none;
    width: 100%;
    margin-bottom: .26rem;
    font-size: .2rem;
    padding: 0 .1rem;

    &::placeholder {
      color: #909090;
    }
  }

  .desc {
    font-size: .24rem;
    color: #636E89;
    line-height: .36rem;
    margin: .14rem 0 .24rem;
  }
}
</style>