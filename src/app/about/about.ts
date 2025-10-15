import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="about-container">
        <div class="profile-image">

        </div>
        <div class="bio">
          <h2>About : Chieff Weaver</h2>
          <p>Yuurr! I'm a web developer who's totally hooked on crafting websites that look great, work smoothly, and feel intuitive to use. I got into coding back in college—built my first site for a class project and instantly fell in love with the whole process. There's just something magical about turning an idea into something real with code.</p>

          <p>I'm a big believer in writing clean, maintainable code and building experiences that people actually enjoy using. When I'm not deep in code, I'm usually geeking out over new tech, pitching in on open-source projects, or swapping ideas with other devs in the community.</p>

          <p>I'm especially into front-end development—there's something really satisfying about building responsive, accessible sites that feel great no matter what device you're on. I love diving into new challenges and teaming up with others to create digital experiences that really stand out.</p>

          <p>Right now, I'm on the lookout for exciting, forward-thinking projects that push me to level up and let me be part of building something meaningful.</p>
        </div>
      </div>

      <div class="contact-container">
        <h1>Contact Me</h1>

        <form (ngSubmit)="onSubmit($event)">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="formData.name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              [(ngModel)]="formData.message"
              rows="5"
            ></textarea>
          </div>

          <button type="submit">
            Submit
          </button>
        </form>

        <!-- Popup Modal -->
        <div *ngIf="submitted" class="modal-overlay" (click)="closeModal()">
          <div class="modal-content" (click)="$event.stopPropagation()">
            <button class="close-btn" (click)="closeModal()">&times;</button>
            <div class="success-icon">✅</div>
            <h2>Message Sent!</h2>
            <p>I'll get back to you soon.</p>
            <button class="ok-btn" (click)="closeModal()">OK</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    div {
      font-family: "Nunito", sans-serif;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .about-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    .profile-image {
      width: 100%;
      aspect-ratio: 1;
      background: linear-gradient(135deg, #6366f1 0%,rgb(99, 95, 175, 0) 100%), url('/chieffhappy.jpg');
      background-size: cover;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 5rem;
      font-weight: bold;
    }

    .bio h2 {
      color: #6366f1;
      margin-bottom: 1rem;
    }

    .bio p {
      margin-bottom: 1rem;
      color: #64748b;
      line-height: 1.6;
    }

    .contact-container {
      background: linear-gradient(135deg, #6366f1 0%,rgb(99, 95, 175, 0.2) 100%), url('/tnhills.jpg');
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      color: white;
      border-radius: 1rem;
    }

    .contact-container h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    form {
      width: 100%;
      max-width: 500px;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 10px;
      backdrop-filter: blur(10px);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s;
    }

    input::placeholder, textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.7);
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: white;
      color: #3a0066;
      border: none;
      border-radius: 5px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .success-message {
      font-size: 1.5rem;
      text-align: center;
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      max-width: 500px;
      animation: successFadeIn 0.5s;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s;
    }

    .modal-content {
      background: white;
      color: #333;
      padding: 2.5rem;
      border-radius: 1rem;
      max-width: 400px;
      width: 90%;
      text-align: center;
      position: relative;
      animation: slideUp 0.3s;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 2rem;
      color: #999;
      cursor: pointer;
      padding: 0;
      width: 2rem;
      height: 2rem;
      line-height: 1;
      transition: color 0.3s;
    }

    .close-btn:hover {
      color: #333;
      transform: none;
      box-shadow: none;
    }

    .success-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .modal-content h2 {
      color: #3a0066;
      margin-bottom: 0.5rem;
      font-size: 1.75rem;
    }

    .modal-content p {
      color: #666;
      margin-bottom: 1.5rem;
      font-size: 1rem;
    }

    .ok-btn {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .ok-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
    }

    @keyframes successFadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .about-container {
        grid-template-columns: 1fr;
      }

      .profile-image {
        font-size: 3rem;
      }
    }
  `]
})
export class AboutComponent {
  submitted = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    console.log('Form Data:', this.formData);
    this.submitted = true;
  }

  closeModal() {
    this.submitted = false;
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}