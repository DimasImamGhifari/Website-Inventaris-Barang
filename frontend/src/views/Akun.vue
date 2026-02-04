<template>
  <div class="page-container">
    <div class="page-header">
      <h1>Pengaturan Akun</h1>
    </div>

    <div class="account-grid">
      <!-- Ganti Username -->
      <div class="card">
        <div class="card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h2>Ganti Username</h2>
        <p class="card-description">Ubah username untuk login</p>
        <form @submit.prevent="updateUsername" class="form">
          <div class="form-group">
            <label>Username Saat Ini</label>
            <input type="text" :value="currentUsername" disabled class="input-disabled" />
          </div>
          <div class="form-group">
            <label>Username Baru</label>
            <input type="text" v-model="usernameForm.username" placeholder="Masukkan username baru" required minlength="3" />
          </div>
          <button type="submit" class="btn btn-primary" :disabled="savingUsername">
            <span v-if="savingUsername">Menyimpan...</span>
            <span v-else>Simpan Username</span>
          </button>
        </form>
      </div>

      <!-- Ganti Password -->
      <div class="card">
        <div class="card-icon card-icon-password">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h2>Ganti Password</h2>
        <p class="card-description">Ubah password untuk keamanan akun</p>
        <form @submit.prevent="updatePassword" class="form">
          <div class="form-group">
            <label>Password Lama</label>
            <div class="input-password">
              <input :type="showOldPass ? 'text' : 'password'" v-model="passwordForm.password_lama" placeholder="Masukkan password lama" required />
              <button type="button" class="btn-eye" @click="showOldPass = !showOldPass">
                <svg v-if="!showOldPass" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label>Password Baru</label>
            <div class="input-password">
              <input :type="showNewPass ? 'text' : 'password'" v-model="passwordForm.password_baru" placeholder="Masukkan password baru" required minlength="6" />
              <button type="button" class="btn-eye" @click="showNewPass = !showNewPass">
                <svg v-if="!showNewPass" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label>Konfirmasi Password Baru</label>
            <div class="input-password">
              <input :type="showConfirmPass ? 'text' : 'password'" v-model="passwordForm.konfirmasi" placeholder="Ulangi password baru" required minlength="6" />
              <button type="button" class="btn-eye" @click="showConfirmPass = !showConfirmPass">
                <svg v-if="!showConfirmPass" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="savingPassword">
            <span v-if="savingPassword">Menyimpan...</span>
            <span v-else>Simpan Password</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Notification -->
    <Transition name="notification">
      <div v-if="notification.show" class="notification" :class="notification.type">
        <svg v-if="notification.type === 'success'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <span>{{ notification.message }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const currentUsername = ref('')
const savingUsername = ref(false)
const savingPassword = ref(false)
const showOldPass = ref(false)
const showNewPass = ref(false)
const showConfirmPass = ref(false)

const usernameForm = ref({ username: '' })
const passwordForm = ref({ password_lama: '', password_baru: '', konfirmasi: '' })

const notification = ref({ show: false, message: '', type: 'success' })

const showNotification = (message, type = 'success') => {
  notification.value = { show: true, message, type }
  setTimeout(() => { notification.value.show = false }, 3000)
}

const updateUsername = async () => {
  if (!usernameForm.value.username.trim()) return
  savingUsername.value = true
  try {
    const response = await api.put('/akun', { username: usernameForm.value.username })
    currentUsername.value = response.data.user.email
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}')
    userData.email = response.data.user.email
    userData.name = response.data.user.name
    sessionStorage.setItem('user', JSON.stringify(userData))
    usernameForm.value.username = ''
    showNotification('Username berhasil diperbarui')
  } catch (error) {
    showNotification(error.response?.data?.message || 'Gagal memperbarui username', 'error')
  } finally {
    savingUsername.value = false
  }
}

const updatePassword = async () => {
  if (passwordForm.value.password_baru !== passwordForm.value.konfirmasi) {
    showNotification('Password baru dan konfirmasi tidak cocok', 'error')
    return
  }
  savingPassword.value = true
  try {
    await api.put('/akun', {
      password_lama: passwordForm.value.password_lama,
      password_baru: passwordForm.value.password_baru
    })
    passwordForm.value = { password_lama: '', password_baru: '', konfirmasi: '' }
    showNotification('Password berhasil diperbarui')
  } catch (error) {
    showNotification(error.response?.data?.message || 'Gagal memperbarui password', 'error')
  } finally {
    savingPassword.value = false
  }
}

onMounted(() => {
  const userData = sessionStorage.getItem('user')
  if (userData) {
    currentUsername.value = JSON.parse(userData).email
  }
})
</script>

<style scoped>
.page-container {
  padding: 24px 0;
}

.page-header {
  margin-bottom: 24px;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

.account-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.card {
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  padding: 28px;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #e8f4fd;
  color: #2196f3;
  margin-bottom: 16px;
}

.card-icon-password {
  background: #fff3e0;
  color: #ff9500;
}

.card h2 {
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.card-description {
  margin: 0 0 24px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 14px;
  background: var(--bg-card);
  color: var(--text-primary);
  transition: all 0.2s ease;
  width: 100%;
}

.form-group input:focus {
  outline: none;
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
}

.input-disabled {
  background: var(--bg-primary) !important;
  color: var(--text-secondary) !important;
  cursor: not-allowed;
}

.input-password {
  position: relative;
  display: flex;
  align-items: center;
}

.input-password input {
  padding-right: 44px;
}

.btn-eye {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.btn-eye:hover {
  color: var(--text-primary);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: #0071e3;
  color: #ffffff;
}

.btn-primary:hover:not(:disabled) {
  background: #0077ed;
}

.btn-primary:disabled {
  background: var(--text-secondary);
  cursor: not-allowed;
}

/* Notification */
.notification {
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  z-index: 1001;
  box-shadow: 0 4px 12px var(--shadow-color);
}

.notification.success { color: #34c759; }
.notification.error { color: #ff3b30; }

.notification-enter-active { animation: slideDown 0.3s ease; }
.notification-leave-active { animation: slideUp 0.3s ease; }

@keyframes slideDown {
  from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes slideUp {
  from { opacity: 1; transform: translateX(-50%) translateY(0); }
  to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
}

/* Responsive - Tablet */
@media (max-width: 768px) {
  .page-container {
    padding: 16px 0;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .account-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card {
    padding: 20px;
  }
}

/* Responsive - Mobile */
@media (max-width: 480px) {
  .page-header h1 {
    font-size: 18px;
  }

  .card {
    padding: 16px;
    border-radius: 8px;
  }

  .card h2 {
    font-size: 16px;
  }

  .form-group input {
    padding: 12px;
    font-size: 16px;
  }

  .notification {
    left: 16px;
    right: 16px;
    transform: none;
  }
}
</style>
