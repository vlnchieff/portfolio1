import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  learnings: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <div class="container">
      <h1>My Projects</h1>
      <div class="projects-grid">
        <div class="project-card" *ngFor="let project of projects">
          <div class="project-header">
            <h3>{{ project.title }}</h3>
          </div>
          <div class="project-content">
            <p><strong>Description:</strong> {{ project.description }}</p>
            <p><strong>Technologies:</strong></p>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
            </div>
            <p><strong>What I Learned:</strong> {{ project.learnings }}</p>
            <a [href]="project.link" class="project-link" target="_blank">View Project →</a>
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

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: #6366f1;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
    }

    .project-header {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: white;
      padding: 2rem;
      text-align: center;
    }

    .project-header h3 {
      font-size: 1.5rem;
      margin: 0;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-content p {
      color: #64748b;
      margin-bottom: 1rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tech-tag {
      background: #f8fafc;
      color: #6366f1;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.85rem;
      border: 1px solid #6366f1;
    }

    .project-link {
      color: #6366f1;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .project-link:hover {
      color: #4f46e5;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Non-Profit Website',
      description: 'Trees Knoxville’s website promotes urban forestry through education, community engagement, and volunteer opportunities to expand Knoxville’s tree canopy.',
      technologies: ['Wordpress', 'WooCommerce', 'PHP', 'JavaScript'],
      learnings: 'I learned the ins and outs of Wordpress and WooCommerce, including custom theme development and plugin integration to meet the specific needs of a non-profit organization.',
      link: 'https://www.treesknoxville.org/'
    },
    {
      title: 'Virtual Taco Stand',
      description: 'An application to help customers find the perfect order, place it, and discover new possibilities. ',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      learnings: '',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for organizing tasks, setting priorities, and tracking progress with drag-and-drop functionality.',
      technologies: ['Angular', 'RxJS', 'Firebase'],
      learnings: 'Developed skills in state management, real-time databases, and implementing intuitive user interactions.',
      link: '#'
    },

  ];
}
