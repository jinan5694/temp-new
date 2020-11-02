<template>
  <el-form
    ref="formRef"
    :model="model"
    :rules="rules"
    @keydown.enter.native="handleEnter"
  >
    <el-form-item :label="$t('login.account')" prop="account">
      <el-input
        ref="accountRef"
        v-model="model.account"
        size="medium"
        :placeholder="$t('login.account')"
        prefix-icon="el-icon-user"
      />
    </el-form-item>
    <el-form-item :label="$t('login.password')" prop="password">
      <el-input
        v-model="model.password"
        size="medium"
        type="password"
        :placeholder="$t('login.password')"
        prefix-icon="el-icon-key"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="model.checked">{{
        $t('login.remember')
      }}</el-checkbox>
      <el-link style="float: right;">{{ $t('login.forget') }}</el-link>
    </el-form-item>
    <el-button
      type="primary"
      size="medium"
      class="login__btn"
      :loading="loading"
      @click="submit"
      >{{ $t('login.login') }}</el-button
    >
  </el-form>
</template>
<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
import { instance } from '@/plugins/axios'
import md5 from 'js-md5'
// import { setToken } from '@/utils/token'
// import api from '@/api'
export default {
  name: 'LoginForm',
  setup(props, { root }) {
    const loading = ref(false)
    const model = reactive({
      account: 'system',
      password: 'system',
      checked: true
    })
    // refs
    const formRef = ref(null)
    const accountRef = ref(null)

    const rules = {
      account: [
        {
          required: true,
          message: root.$t('login.accountRequired'),
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: root.$t('login.passwordRequired'),
          trigger: 'blur'
        }
      ]
    }

    onMounted(() => {
      accountRef.value.focus()
    })

    function submit() {
      formRef.value.validate(valid => {
        if (valid) {
          login()
        }
      })
    }

    function login() {
      loading.value = true

      const params = new URLSearchParams()
      params.append('username', model.account)
      params.append('password', md5(model.password))
      params.append('grant_type', 'password')
      params.append('scope', 'web')
      params.append('client_id', 'web')
      params.append('client_secret', 'web')

      instance
        .post('/auth/oauth/token', params, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(data => {
          localStorage.setItem('token', data.access_token)
          root.$router.push({ name: 'dashboard' })
        })
        .catch(error => {
          root.$message.error(error.message)
        })
        .finally(() => {
          loading.value = false
        })
    }

    function handleEnter() {
      login()
    }

    return {
      loading,
      model,
      formRef,
      accountRef,
      rules,
      submit,
      handleEnter
    }
  }
}
</script>
<style lang="less" scoped>
.login__btn {
  width: 100%;
}
.link {
  display: flex;
  justify-content: space-between;
}
</style>
