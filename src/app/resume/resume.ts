import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="resume-section">
        <h2>Education</h2>
        <div class="resume-item" *ngFor="let edu of education">
          <h3>{{ edu.degree }}</h3>
          <p class="meta">{{ edu.institution }} | {{ edu.period }}</p>
          <p>{{ edu.description }}</p>
        </div>
      </div>

      <div class="resume-section">
        <h2>Skills</h2>
        <div class="skills-grid">
          <div class="skill-tag" *ngFor="let skill of skills">{{ skill }}</div>
        </div>
      </div>

      <div class="resume-section">
        <h2>Experience</h2>
        <div class="resume-item" *ngFor="let exp of experience">
          <h3>{{ exp.title }}</h3>
          <p class="meta">{{ exp.company }} | {{ exp.period }}</p>
          <p>{{ exp.description }}</p>
        </div>
      </div>

      <div class="resume-section">
        <h2>Certifications & Awards</h2>
        <div class="resume-item" *ngFor="let cert of certifications">
          <h3>{{ cert.name }}</h3>
          <p class="meta">{{ cert.issuer }} | {{ cert.year }}</p>
        </div>
      </div>

      <button class="download-btn" (click)="downloadResume()">Download Resume (PDF)</button>
    </div>
  `,
  styles: [`
    div{
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

    .resume-section {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    .resume-section h2 {
      color: #6366f1;
      border-bottom: 2px solid #6366f1;
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .resume-item {
      margin-bottom: 1.5rem;
    }

    .resume-item h3 {
      color: #1e293b;
      margin-bottom: 0.5rem;
    }

    .resume-item .meta {
      color: #64748b;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .skill-tag {
      background: #f8fafc;
      padding: 0.75rem;
      border-radius: 0.5rem;
      text-align: center;
      border: 2px solid #6366f1;
      color: #6366f1;
      font-weight: 500;
    }

    .download-btn {
      background: #6366f1;
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 1rem;
    }

    .download-btn:hover {
      background: #4f46e5;
    }
  `]
})
export class ResumeComponent {
  education: Education[] = [
    {
      degree: 'Bachelor Degree in Web Development',
      institution: 'Bellevue University',
      period: '2024 - 2026',
      description: 'Focused on software engineering, data structures, and web development. GPA: 3.7/4.0'
    },
    {
      degree: 'Associate Degree in Web/Media Technology',
      institution: 'Pellissippi State Community College',
      period: '2019 - 2021',
      description: 'Intensive program covering full-stack web development, modern frameworks, and best practices. GPA: 3.4/4.0'
    }
  ];

  skills: string[] = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'WordPress',
    'Microsoft ', 'Python', 'Adobe CC', 'SQL', 'WebDev', 'Responsive Design'
  ];

  experience: Experience[] = [
    {
      title: 'Junior Web Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developed and maintained responsive web applications using Angular and Node.js. Collaborated with design team to implement user-friendly interfaces.'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2022 - 2023',
      description: 'Created custom websites for small businesses. Managed projects from concept to deployment, ensuring client satisfaction.'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Certified Web Developer',
      issuer: 'Certification Body',
      year: '2023'
    },
    {
      name: 'Dean\'s List',
      issuer: 'University Name',
      year: '2021, 2022'
    }
  ];

  downloadResume(): void {
    alert('Resume download functionality would be implemented here.');
    // In a real application, this would trigger a file download
  }
}
