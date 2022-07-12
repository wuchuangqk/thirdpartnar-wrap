<template>
  <div>
    <Banner :imgs="['bannner_1@2x.png', 'bannner_2@2x.png']" />
    <div class="grid gap-12 grid-cols-4 px-12 mt-26 mb-70">
      <div class="div1">
        <img src="../assets/jiangbei@2x.png" alt="" class="img1">
        <div>
          <p class="title">10年<span>+</span></p>
          <p class="desc">互联网行业经验</p>
        </div>
      </div>
      <div class="div1">
        <img src="../assets/piinpai@2x.png" alt="" class="img1">
        <div>
          <p class="title">1000<span>+</span></p>
          <p class="desc">累计服务品牌</p>
        </div>
      </div>
      <div class="div1">
        <img src="../assets/tuandui@2x.png" alt="" class="img1">
        <div>
          <p class="title">1000<span>+</span></p>
          <p class="desc">营销服务团队</p>
        </div>
      </div>
      <div class="div1">
        <img src="../assets/zhanghu@2x.png" alt="" class="img1">
        <div>
          <p class="title">2000<span>+</span></p>
          <p class="desc">日活跃推广账户</p>
        </div>
      </div>
    </div>
    <Title title="业务范围" en="SCOPE OF BUSINESS" />
    <div class=" overflow-auto px-16 pb-16 flex flex-nowrap app-hide-bar">
      <div v-for="item in links" :key="item.label" class="link" :class="{ active: item.label === activeLink }">{{ item.label }}</div>
    </div>
    <p class="color-595959 px-20 mt-36 p1">
      现有主流的应用商店广告包括：iOS、华为、vivo、oppo、小米、360推广等，苹果ASA广告是通过关键词竞价的方式，在AppStore搜索结果的顶部展示广告。安卓CPD广告是按照下载收费的方式，在安卓应用市场（华为、小米、oppo、vivo）搜索、推荐、活动区展示广告。
    </p>
    <div>
      <img src="../assets/yingyongshad@2x.png" alt="" class="img2">
    </div>
    <Title title="我们的优势" en="OUR STRENGTHS" />
    <div class=" px-12 mb-80">
      <div class="div2">
        <img src="../assets/zhengheyx@2x.png" alt="" class="img3 left">
        <div class="div2-1"></div>
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">团队多年移动互联网广告推广经验，专业为广告主提供移动互联网整合营销一站式服务。</p>
        </div>
      </div>
      <div class="div2">
        <img src="../assets/jingztf@2x.png" alt="" class="img3 right">
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">分析每个产品的优势针对投放地区的用户行为更有针对性的进行投放。</p>
        </div>
        <div class="div2-1"></div>
      </div>
      <div class="div2">
        <img src="../assets/scdongcha@2x.png" alt="" class="img3 left">
        <div class="div2-1"></div>
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">对用户行为、推广方式、数据表现及优化方面等具有丰富的实践经验。</p>
        </div>
      </div>
      <div class="div2">
        <img src="../assets/ggyh@2x.png" alt="" class="img3 right">
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">业内顶尖的优化团队对各大广告主流平台具有丰富的全球投放及优化经验。</p>
        </div>
        <div class="div2-1"></div>
      </div>
      <div class="div2">
        <img src="../assets/shujfx@2x.png" alt="" class="img3 left">
        <div class="div2-1"></div>
        <div class="pl-22 pr-50 flex-1 flex items-center">
          <p class="p2">通过检测、统计等手段，来分析广告素材，关键词等投放效果。</p>
        </div>
      </div>
    </div>
    <Title title="合作流程" en="COOPERATION PROCESS" />
    <img src="../assets/liuchen_@2x.png" alt="" class="img4">
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
import Title from '@/components/Title.vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
import axios from 'axios'
import qs from 'qs'
import Banner from '@/components/Banner.vue';

const router = useRouter()
const links = [
  { label: '信息流广告代运营', path: '' },
  { label: '搜索广告代运营', path: '' },
  { label: '应用商店代运营', path: '' },
  { label: '海外广告代运营', path: '' },
  { label: '关于我们', path: '' },
]
const activeLink = '信息流广告代运营'
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
    Toast('提交成功,客服会尽快与您联系')
  }).catch((err) => {
    loading.clear()
    Toast(err)
  })
}
</script>

<style lang="scss" scoped>
.div1 {
  background: #EEF2F8;
  border-radius: .09rem;
  padding: .2rem .06rem;
  display: flex;

  .title {
    font-size: .24rem;
    color: #4285F4;
    display: flex;
    align-items: flex-end;
  }

  .desc {
    font-size: .16rem;
    margin-top: .08rem;
  }

  .img1 {
    width: .44rem;
    height: .44rem;
    margin-right: .07rem;
  }
}

.link {
  font-size: .24rem;
  color: #474747;
  position: relative;
  flex: 0 0 auto;
  margin-right: .5rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    font-weight: bold;
    color: #1A1A1A;

    &::after {
      content: '';
      position: absolute;
      width: .33rem;
      height: .05rem;
      background: #4285F4;
      border-radius: .03rem;
      bottom: -.12rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.p1 {
  line-height: .33rem;
}

.img2 {
  width: 4.87rem;
  height: 3.42rem;
  margin: .6rem auto .8rem;
}

.div2 {
  margin-bottom: .2rem;
  display: flex;
  border: 1px solid #C1C9DF;
  position: relative;
  height: 1.71rem;

  .div2-1 {
    width: 3.08rem;
  }

  .p2 {
    font-size: .24rem;
    color: #151618;
    line-height: .33rem;
  }

  .img3 {
    position: absolute;
    width: 3.08rem;
    height: 1.71rem;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}

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