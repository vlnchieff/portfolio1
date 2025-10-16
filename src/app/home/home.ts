import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

interface BucketItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgForOf],
  template: `
    <div class="container">
      <div class="hero">
        <h1>Chieff Weaver</h1>
        <h2>portfolio</h2>
        <p>A passionate web developer & owner of Goodi Digital</p>
      </div>


      <div class="bucket-list" id="demoparagraph">

        <ul>
          <li *ngFor="let item of bucketList">
            {{ item.icon }} {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`

    #demoparagraph {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
      -webkit-column-gap: 16px;
      -moz-column-gap: 16px;
      column-gap: 16px;
      -webkit-column-rule: 1px solid rgba(23,164,106,0.48);
      -moz-column-rule: 1px solid rgba(23,164,106,0.48);
      column-rule: 1px solid rgba(23,164,106,0.48);
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

     div{
      font-family: "Nunito", sans-serif;
    }



    .hero h1 {
      font-size: 8rem;
      font-variant: small-caps;
      letter-spacing: 6.4px;
      margin-bottom: 0rem;
    }

    .hero h2 {
      text-transform: uppercase;
      letter-spacing: 30.4px;
      margin-bottom: 1rem;
      opacity: 0.7;
    }

    .hero p {
      font-size: 1rem;
      opacity: 0.9;
    }

    .bucket-list {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .bucket-list h2 {
      color: #6366f1;
      margin-bottom: 1.5rem;
    }

    .bucket-list ul {
      list-style: none;
      padding: 0;
    }

    .bucket-list li {
      padding: 1rem;
      border-left: 3px solid #6366f1;
      margin-bottom: 1rem;
      background: #f8fafc;
      border-radius: 0.5rem;
    }

    .bucket-list li:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent {
  bucketList: BucketItem[] = [
    { icon: '🚀', text: 'Build a passion project that earns real users' },
    { icon: '🌍', text: 'Master Angular Typescript' },
    { icon: '📚', text: 'Speak at a tech meetup or conference about your dev journey.' },
    { icon: '🎓', text: 'Automate a tedious task with a custom script or browser extension.' },
    { icon: '🏔️', text: 'Refactor legacy code into a sleek, modern architecture.' },
    { icon: '💡', text: 'Contribute to an open-source project with 100+ stars on GitHub.' },
    { icon: '🎨', text: 'Build a full-stack app from scratch and deploy it live' },
    { icon: '🤖', text: 'Launch a personal portfolio site that gets featured on a design blog.' }
  ];
}