<template>
  <div class="container-fluid login-page">
    <div class="row">
      <div class="main-info col-lg-6 col-md-12">
        <div class="main-text">
          <h3>Welcome Back 👋</h3>

          <p class="subtitle">
            Today is a new day. It's your day. You shape it. <br />
            Sign in to start managing your projects.
          </p>

          <form>
            <label>Email</label>
            <input type="email" placeholder="Example@gmail.com" required />

            <label>Password</label>
            <input
              type="password"
              placeholder="At least 8 characters"
              required
            />

            <router-link class="text-deco" :to="{ name: 'forgetpassword' }">
              <p class="forget-password">Forget Password?</p>
            </router-link>

            <button type="submit" class="btn signin">Sign in</button>

            <div class="divider">
              <div class="line"></div>
              <span>Or</span>
              <div class="line"></div>
            </div>

            <button class="google-btn">Sign in with Google</button>
            <button class="facebook-btn">Sign in with Facebook</button>

            <p class="account">
              Don’t have an account?
              <span class="signup">Sign up</span>
            </p>
          </form>
        </div>

        <p class="footer text-center">© 2025 ALL RIGHT RESERVED</p>
      </div>

      <div class="col-lg-6 col-md-12 image-side">
        <img src="/flower 3.jpg" alt="Flower" class="side-image" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.text-deco {
  text-decoration: none;
}

.login-page {
  background: #ffffff;
  width: 100%;
  padding: 2.5rem;
}

.main-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-text {
  width: 75%;
  margin: 3rem auto;
}

h3 {
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 0.7rem;
  color: #0a2540;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 1.5rem;
}

label {
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background: #f3f4f6;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: 1px solid #0a2540;
  }
}

.forget-password {
  text-align: right;
  margin-top: 5px;
  font-size: 13px;
  color: #0a2540;
  font-weight: 600;
  cursor: pointer;
}

.signin {
  width: 100%;
  padding: 12px;
  margin-top: 1.4rem;
  background: #0a2540;
  color: #fff;
  border-radius: 0.5rem;
  font-weight: 600;
}

.divider {
  margin: 1.8rem 0;
  display: flex;
  align-items: center;
  gap: 12px;

  .line {
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  span {
    font-size: 12px;
    color: #6b7280;
    padding: 4px 10px;
    border-radius: 30px;
    background: #fff;
    font-weight: 600;
  }
}

.google-btn,
.facebook-btn {
  width: 100%;
  padding: 12px;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background: #f3f4f6;
  font-weight: 600;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.account {
  text-align: center;
  margin-top: 1.2rem;
  font-size: 14px;
  color: #6b7280;

  .signup {
    color: #0a2540;
    font-weight: 700;
    cursor: pointer;
  }
}

.footer {
  text-align: center;
  margin-top: 1rem;
  font-size: 13px;
}

.image-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

@media (max-width: 992px) {
  .login-page {
    padding: 1.2rem;
  }

  .row {
    flex-direction: column-reverse;
  }

  .main-text {
    width: 100%;
    margin-top: 1rem;
  }

  .footer {
    margin-top: 2rem;
    position: static;
  }

  h3 {
    font-size: 26px;
    margin-top: 1rem;
  }

  .subtitle {
    font-size: 15px;
  }

  .side-image {
    height: 45vh;
    border-radius: 0.8rem;
  }
}

@media (max-width: 600px) {
  h3 {
    font-size: 22px;
  }

  .subtitle {
    font-size: 12px;
  }

  label,
  input,
  .signin,
  .google-btn,
  .facebook-btn {
    font-size: 13px;
    padding: 10px;
  }

  .forget-password {
    font-size: 11px;
  }

  .divider span {
    font-size: 11px;
  }

  .side-image {
    height: 35vh;
  }

  .footer {
    margin-top: 3rem;
    font-size: 12px;
  }
}
</style>
