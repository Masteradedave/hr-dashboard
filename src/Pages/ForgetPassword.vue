<template>
  <div class="container-fluid">
    <div class="content row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10 p-4">
        <router-link class="text-deco" :to="{ name: 'homepage' }">
          <span class="back-arrow">
            <FontAwesomeIcon :icon="['fas', 'angle-left']" />
          </span>
        </router-link>
        <br />

        <div v-if="step === 1" class="card-step">
          <h3>Forget Password 🔒</h3>
          <p>Please enter User ID or Email to reset the password</p>

          <form @submit.prevent="goToOTP">
            <label class="fw-bold">User ID / Email</label>
            <input type="text" placeholder="Enter username or email" required />
            <button class="btn reset-password">Reset Password</button>
          </form>
        </div>

        <div v-if="step === 2" class="card-step">
          <h3>Enter OTP 🔑</h3>
          <p>Please enter the 6-digit code sent to your email</p>

          <div class="otp-box">
            <input
              v-for="(digit, index) in otp"
              :key="index"
              type="text"
              maxlength="1"
              inputmode="numeric"
              ref="otpInputs"
              v-model="otp[index]"
              @input="handleOTPInput(index)"
              @keydown.backspace="handleBackspace(index)"
            />
          </div>

          <button class="btn reset-password" @click="verifyOTP">
            Verify OTP
          </button>
          <button class="btn reset-password mt-2" @click="resendOTP">
            Resend OTP
          </button>
        </div>

        <div v-if="step === 3" class="card-step">
          <h3>Password Reset 🔑</h3>
          <p>Your password has been verified. Continue to reset.</p>

          <button class="btn reset-password" @click="setNewPassword">
            Continue
          </button>
        </div>

        <div v-if="step === 4" class="card-step">
          <h3>Set a new Password</h3>
          <p>Create a strong password that meets the requirements.</p>

          <form @submit.prevent="updatePassword">
            <label class="fw-bold">New Password</label>
            <div class="password-wrapper">
              <input
                :type="showNewPassword ? 'text' : 'password'"
                v-model="newPassword"
                placeholder="Enter new password"
                @input="validatePassword"
                required
              />
              <span
                class="toggle-password"
                @click="showNewPassword = !showNewPassword"
              >
                <font-awesome-icon
                  :icon="
                    showNewPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']
                  "
                />
              </span>
            </div>

            <ul class="password-rules">
              <li :class="{ valid: rules.length }">
                <font-awesome-icon :icon="['fas', 'check']" /> At least 8
                characters
              </li>
              <li :class="{ valid: rules.uppercase }">
                <font-awesome-icon :icon="['fas', 'check']" /> One uppercase
                letter
              </li>
              <li :class="{ valid: rules.lowercase }">
                <font-awesome-icon :icon="['fas', 'check']" /> One lowercase
                letter
              </li>
              <li :class="{ valid: rules.number }">
                <font-awesome-icon :icon="['fas', 'check']" /> One number
              </li>
              <li :class="{ valid: rules.special }">
                <font-awesome-icon :icon="['fas', 'check']" /> One special
                character
              </li>
            </ul>

            <label class="fw-bold mt-3">Confirm Password</label>
            <div class="password-wrapper">
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="confirmPassword"
                placeholder="Re-enter password"
                required
              />
              <span
                class="toggle-password"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                <font-awesome-icon
                  :icon="
                    showConfirmPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']
                  "
                />
              </span>
            </div>

            <p v-if="passwordError" class="error-text">
              {{ passwordError }}
            </p>

            <button class="btn reset-password" :disabled="!isPasswordValid">
              Update Password
            </button>
          </form>
        </div>

        <div v-if="step === 5" class="card-step text-center">
          <div class="success">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <p class="fw-bold fs-5 mt-3">Successful</p>
          <p>Your password has been updated successfully.</p>
          <router-link :to="{ name: 'homepage' }">
            <button class="btn reset-password continue">Continue</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, computed } from "vue";

const step = ref(1);

const otp = ref(["", "", "", "", "", ""]);
const otpInputs = ref([]);

const goToOTP = () => {
  step.value = 2;
  nextTick(() => otpInputs.value[0]?.focus());
};

const handleOTPInput = (index) => {
  if (otp.value[index] && index < 5) {
    otpInputs.value[index + 1].focus();
  }
};

const handleBackspace = (index) => {
  if (!otp.value[index] && index > 0) {
    otpInputs.value[index - 1].focus();
  }
};

const verifyOTP = () => {
  if (otp.value.join("").length !== 6) {
    alert("Enter full OTP");
    return;
  }
  step.value = 3;
};

const resendOTP = () => alert("OTP resent");

const newPassword = ref("");
const confirmPassword = ref("");
const passwordError = ref("");

const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

const rules = ref({
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  special: false,
});

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;

const validatePassword = () => {
  const p = newPassword.value;
  rules.value.length = p.length >= 8;
  rules.value.uppercase = /[A-Z]/.test(p);
  rules.value.lowercase = /[a-z]/.test(p);
  rules.value.number = /\d/.test(p);
  rules.value.special = /[@$!%*?#&]/.test(p);
};

const isPasswordValid = computed(
  () =>
    regex.test(newPassword.value) && newPassword.value === confirmPassword.value
);

const setNewPassword = () => (step.value = 4);

const updatePassword = () => {
  if (!isPasswordValid.value) {
    passwordError.value = "Password requirements not met";
    return;
  }
  step.value = 5;
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.back-arrow {
  width: 40px;
  height: 40px;
  background: #0a2540;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.card-step {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 12px;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background: #f3f4f6;
}

.password-wrapper {
  position: relative;
  width: 100%;
  margin-top: 0.5rem;

  input {
    padding: 12px 40px 12px 12px;
  }

  .toggle-password {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #0a2540;
  }
}

.reset-password {
  width: 100%;
  margin-top: 1.4rem;
  padding: 12px;
  background: #0a2540;
  color: #fff;
  border-radius: 0.5rem;
  opacity: 0.7;
  &:focus,
  &:hover {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &.continue {
    opacity: 1;
  }
}

.otp-box {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  border: none;
  outline: none;

  input {
    flex: 1;
    min-width: 40px;
    max-width: 60px;
    height: 60px;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
    background: #f3f4f6;
    transition: border 0.2s, box-shadow 0.2s;
    &:focus {
      border-color: #0a2540;
      box-shadow: 0 0 0 2px rgba(10, 37, 64, 0.2);
      outline: none;
    }
  }
}

.password-rules {
  list-style: none;
  padding: 0;
  margin-top: 0.8rem;

  li {
    font-size: 0.85rem;
    color: #9ca3af;
    display: flex;
    gap: 8px;

    &.valid {
      color: #0a2540;
    }
  }
}

.error-text {
  color: #dc2626;
  font-size: 0.85rem;
}

.success {
  width: 90px;
  height: 90px;
  margin: auto;
  background: #0a2540;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
}

@media (max-width: 768px) {
  .otp-box input {
    height: 50px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .otp-box {
    gap: 0.5rem;
  }
  .otp-box input {
    height: 45px;
    font-size: 0.9rem;
  }
}
</style>
