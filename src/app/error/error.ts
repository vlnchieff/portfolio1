import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
      <div class="error-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for seems to have wandered off into the digital void.</p>
        <a routerLink="/home" class="home-btn">Return to Home</a>
      </div>
    </div>
  `,
  styles: [`
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

    .error-container {
      text-align: center;
      padding: 4rem 2rem;
    }

    .error-container h1 {
      font-size: 8rem;
      color: #6366f1;
      margin-bottom: 1rem;
    }

    .error-container h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #1e293b;
    }

    .error-container p {
      color: #64748b;
      margin-bottom: 2rem;
    }

    .home-btn {
      display: inline-block;
      background: #6366f1;
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s;
    }

    .home-btn:hover {
      background:rgb(82, 146, 216);
    }
  `]
})
export class NotFoundComponent{}