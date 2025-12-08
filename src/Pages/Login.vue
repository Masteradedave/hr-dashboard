<template>
  <div class="login-page container-fluid">
    <div class="row login-content">
      <div class="col-lg-6 col-md-12 left-side">
        <div class="wrapper">
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

            <p class="forget-password">Forget Password?</p>

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

.login-page {
  background: #ffffff;
  width: 100%;
}

.login-content {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2.5rem;
}

.left-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 75%;
  margin: auto;
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
  border: none;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border: none;
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
  color: white;
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
    background: #ffffff;
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
  align-items: center;
  justify-content: center;
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



.image-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 1rem;
}



@media (max-width: 992px) {
  .login-content {
    flex-direction: column-reverse;
    padding: 1.2rem;
  }

  .footer {
    margin-top: 2.5rem;
    position: static;
  }

  h3 {
    margin-top: 1.2rem;
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    font-size: 1rem;
  }

  .forget-password {
    font-size: 1.1rem;
  }

  .signin {
    font-size: 1.2rem;
  }

  .side-image {
    height: 45vh;
    border-radius: 0.8rem;
  }

  .wrapper {
    width: 100%;
  }

  
}

@media (max-width: 600px) {
  .side-image {
    height: 35vh;
  }

  h3 {
    margin-top: 1.2rem;
    font-size: 1.2rem;
  }

  .subtitle {
    font-size: 0.75rem;
  }

  label,
  input {
    font-size: 1rem;
  }

  .forget-password {
    font-size: 0.75rem;
  }

  input,
  .signin,
  .google-btn,
  .facebook-btn {
    padding: 10px;
    font-size: 0.75rem;
  }

  .divider span {
    font-size: 11px;
  }  
}
</style>
