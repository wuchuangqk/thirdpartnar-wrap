<template>
  <div>
    <Title title="合作流程" en="COOPERATION PROCESS" />
    <img src="../assets/liuchen_@2x.webp" alt="" class="img4">
    <dl class="list">
      <dt class="list-title">1、初步电话沟通并免费账户诊断</dt>
      <dd class="list-item">商务人员会通过电话与您初步沟通，征得您的同意会远程对您的竞价账号进行诊断，优化师会根据您的账户过往数据，免费对您的账户进行系统全面得分析诊断。</dd>
      <dt class="list-title">2、给出优化策略</dt>
      <dd class="list-item">根据账户得诊断结果，优化师会给出您的专业、系统得调整方向及策略。</dd>
      <dt class="list-title">3、签订服务协议</dt>
      <dd class="list-item">如果您认可我们的优化策略，我们会跟您签订包括保密协议在内的正规商业合同</dd>
      <dt class="list-title">4、调整账户并进行阶段性数据分析</dt>
      <dd class="list-item">优化师拿到账户后，会根据您的业务模式结合竞价账户诊断结果，正式开始账户调整。账户调整一个阶段后，结合您的业务表现，再次对账户的数据进行全面分析。</dd>
      <dt class="list-title">5、持续效果提升</dt>
      <dd class="list-item">根据账户阶段性的数据分析结果，不断迭代优化，让广告有更好的表现。并且降低您的获客成本。</dd>
      <dt class="list-title">6、定期回访沟通</dt>
      <dd class="list-item">优化师会定期与您进行电话或当面沟通，及时了解咨询成本等多个业务端的数据表现。</dd>
    </dl>
    <Title title="联系我们" en="CONTACT US" class="contact" />
    <div class=" text-center">
      <p class="p3">电话：400-888-9999</p>
      <p class="p3">联系邮箱：tiantian@163.com</p>
      <p class="p3">合作联系：18511169119</p>
      <p class="p3">公司地址：江苏省徐州市泉山区徐州软件园C-1-B204</p>
    </div>
    <img src="../assets/ditu.webp" alt="" class="map">
    <div>
      <p class="fs-30 text-center font-bold">恭喜您获得免费诊断账户</p>
      <p class="color-919191 fs-20 text-center mt-30">请填写您的真实信息，以便我们根据客观情况，定制可行方案</p>
      <div class="form-wrap px-68">
        <div>
          <label class="label">姓名</label>
          <input v-model="formData.name" type="text" class="input" placeholder="请输入您的姓名">
        </div>
        <div>
          <label class="label">手机号</label>
          <input v-model="formData.phone" type="text" class="input" placeholder="请输入您的手机号">
        </div>
        <div>
          <label class="label">其他备注信息</label>
          <textarea v-model="formData.remark" class="textarea input" rows="5" placeholder="请输入您的备注信息"></textarea>
        </div>
        <button class="btn" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from 'vant';
import axios from 'axios'
import qs from 'qs'

const formData = ref({
  name: '',
  phone: '',
  remark: '',
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
    formData.value.name = ''
    formData.value.phone = ''
    formData.value.remark = ''
    Toast('提交成功,客服会尽快与您联系')
  }).catch((err) => {
    loading.clear()
    Toast(err)
  })
}
</script>

<style lang="scss" scoped>
.img4 {
  width: 3.21rem;
  height: 2.52rem;
  margin: -0.16rem auto .27rem;
}

.list {
  padding: 0 .5rem .3rem .3rem;

  .list-title {
    font-size: .24rem;
    color: #1588F8;
    margin-bottom: .15rem;
    font-weight: bold;
    margin-top: .3rem;
  }

  .list-item {
    font-size: .22rem;
    margin-left: .32rem;
    line-height: .3rem;
    list-style: none;
  }
}

.p3 {
  font-size: .24rem;
  color: #010101;
  margin-top: .34rem;
}

::v-deep(.contact) {
  margin: 1.24rem auto .4rem;
}

.map {
  margin: .62rem auto 1.07rem;
  width: 7.23rem;
  height: 4.72rem;
}

.color-919191 {
  color: #919191;
}

.form-wrap {
  margin-top: .66rem;

  .label {
    font-size: .24rem;
    margin-bottom: .12rem;
    display: block;
  }

  .input {
    height: .8rem;
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

  .textarea {
    height: auto;
    resize: none;
    padding-top: .2rem;
  }

  .btn {
    display: block;
    width: 100%;
    height: .8rem;
    background: #4285F4;
    color: white;
    font-size: .28rem;
  }
}
</style>