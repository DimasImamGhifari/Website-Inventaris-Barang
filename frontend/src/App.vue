<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import api from './api'

const apiStatus = ref(null)
const loading = ref(false)
const error = ref(null)

const testConnection = async () => {
  loading.value = true
  error.value = null
  apiStatus.value = null

  try {
    const response = await api.get('/test')
    apiStatus.value = response.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div class="test-connection">
    <h2>Test Backend Connection</h2>
    <button @click="testConnection" :disabled="loading">
      {{ loading ? 'Testing...' : 'Test API Connection' }}
    </button>

    <div v-if="apiStatus" class="success">
      <h3>Success!</h3>
      <pre>{{ JSON.stringify(apiStatus, null, 2) }}</pre>
    </div>

    <div v-if="error" class="error">
      <h3>Error!</h3>
      <p>{{ error }}</p>
    </div>
  </div>

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.test-connection {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 600px;
}

.test-connection button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
}

.test-connection button:hover {
  background-color: #35a372;
}

.test-connection button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.success {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  color: #155724;
}

.error {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  color: #721c24;
}

pre {
  text-align: left;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
