import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent],
  template: `
    <nav class="navbar">
      <ul>
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
        <li><a routerLink="/resume" routerLinkActive="active">Resume</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [`

    li {
      font-family: "Nunito", sans-serif;
    }

    .navbar {
      background: white;
      padding: 1rem 2rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      font-family: Montserrat, sans-serif;
    }

    a {
      color: #1e293b;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }

    a:hover, a.active {
      color: #6366f1;
      background: #f8fafc;
    }

    @media (max-width: 768px) {
      ul {
        gap: 1rem;
      }
    }
  `]
})
export class AppComponent {}
