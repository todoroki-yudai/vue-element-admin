<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">

      <div class="createPost-main-container">
        <el-row>
          <el-col>
            <el-tooltip class="item" effect="dark" content="Input Receiver Address" placement="top">
              <el-form-item label-width="150px" label="Receiver Address:" class="postInfo-container-item">
                <el-input placeholder="Input Receiver Address" style='min-width:150px;' v-model="postForm.receiver_address">
                </el-input>
              </el-form-item>
            </el-tooltip>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-tooltip class="item" effect="dark" content="Input Amount" placement="top">
              <el-form-item label-width="150px" label="Amount:" class="postInfo-container-item">
                <el-input placeholder="Input Amount" style='min-width:150px;' v-model="postForm.amount">
                </el-input>
              </el-form-item>
            </el-tooltip>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-tooltip class="item" effect="dark" content="Input Message" placement="top">
              <el-form-item label-width="150px" label="Message:" class="postInfo-container-item">
                <el-input placeholder="Input Message" style='min-width:150px;' v-model="postForm.message">
                </el-input>
              </el-form-item>
            </el-tooltip>
          </el-col>
        </el-row>

        <sticky :className="'sub-navbar '+postForm.status">
          <template v-if="fetchSuccess">

            <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm()">Thank You
            </el-button>
            <!-- <el-button v-loading="loading" type="warning" @click="draftForm">Draft</el-button> -->

          </template>
          <template v-else>
            <el-tag>Send an exception error, refresh the page, or contact the programmer</el-tag>
          </template>

        </sticky>

      </div>
    </el-form>

  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Upload from '@/components/Upload/singleImage3'
import MDinput from '@/components/MDinput'
import Multiselect from 'vue-multiselect'// 使用的一个多选框组件，element-ui的select不能满足所有需求
import 'vue-multiselect/dist/vue-multiselect.min.css'// 多选框组件css
import Sticky from '@/components/Sticky' // 粘性header组件
// import { validateURL } from '@/utils/validate'
import { fetchArticle } from '@/api/article'
import { userSearch } from '@/api/remoteSearch'

const defaultForm = {
  status: 'draft',
  reciever_address: '',
  amount: 0,
  message: '',
  // title: '', // 文章题目
  // content: '', // 文章内容
  // content_short: '', // 文章摘要
  // source_uri: '', // 文章外链
  // image_uri: '', // 文章图片
  // source_name: '', // 文章外部作者
  // display_time: undefined, // 前台展示时间
  id: undefined,
  platforms: ['a-platform']
  // comment_disabled: false
}

export default {
  name: 'sendDetail',
  components: { Tinymce, MDinput, Upload, Multiselect, Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      console.log('!!!!!!!!!!! check Required')
      if (value === '') {
        this.$message({
          message: rule.field + 'required',
          type: 'error'
        })
        callback(null)
      } else {
        callback()
      }
    }
    return {
      postForm: Object.assign({}, defaultForm),
      fetchSuccess: true,
      loading: false,
      userLIstOptions: [],
      platformsOptions: [
        { key: 'a-platform', name: 'a-platform' },
        { key: 'b-platform', name: 'b-platform' },
        { key: 'c-platform', name: 'c-platform' }
      ],
      rules: {
        reciever_address: [{ validator: validateRequire }],
        amount: [{ validator: validateRequire }]
        // source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
      }
    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.content_short.length
    }
  },
  created() {
    if (this.isEdit) {
      this.fetchData()
    } else {
      this.postForm = Object.assign({}, defaultForm)
    }
  },
  methods: {
    fetchData() {
      fetchArticle().then(response => {
        this.postForm = response.data
      }).catch(err => {
        this.fetchSuccess = false
        console.log(err)
      })
    },
    submitForm() {
      this.postForm.display_time = parseInt(this.display_time / 1000)
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('SendThankyou', this.postForm).then(() => {
            this.$notify({
              title: 'Success',
              message: 'Successfully sent a thank you point !!!',
              type: 'success',
              duration: 2000
            })
            this.loading = false
            this.postForm.status = 'published'
            // this.$router.push({ path: '/' })
          }).catch(() => {
            console.log('regist failed !!!')
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getRemoteUserList(query) {
      userSearch(query).then(response => {
        if (!response.data.items) return
        console.log(response)
        this.userLIstOptions = response.data.items.map(v => ({
          key: v.name
        }))
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .title-prompt{
    position: absolute;
    right: 0px;
    font-size: 12px;
    top:10px;
    color:#ff4949;
  }
  .createPost-container {
    position: relative;
    .createPost-main-container {
      padding: 40px 45px 20px 50px;
      .postInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;
        .postInfo-container-item {
          float: left;
        }
      }
      .editor-container {
        min-height: 500px;
        margin: 0 0 30px;
        .editor-upload-btn-container {
            text-align: right;
            margin-right: 10px;
            .editor-upload-btn {
                display: inline-block;
            }
        }
      }
    }
    .word-counter {
      width: 40px;
      position: absolute;
      right: -10px;
      top: 0px;
    }
  }
</style>
