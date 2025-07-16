import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="patients-page fade-in">
      <h1>病患管理</h1>
      <div class="card">
        <div class="card-header">
          <h2>病患列表</h2>
          <button class="btn btn-primary">
            <span>➕</span>
            新增病患
          </button>
        </div>
        <div class="development-notice">
          <div class="notice-icon">🚧</div>
          <div class="notice-content">
            <h3>功能開發中</h3>
            <p>病患管理功能正在開發中，敬請期待...</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .patients-page {
      h1 {
        color: var(--primary-dark);
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--neutral-200);

        h2 {
          color: var(--text-primary);
          margin: 0;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }

      .development-notice {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem;
        background: linear-gradient(135deg, var(--neutral-100), var(--neutral-200));
        border-radius: 12px;
        border: 2px dashed var(--neutral-400);

        .notice-icon {
          font-size: 3rem;
          opacity: 0.7;
        }

        .notice-content {
          h3 {
            color: var(--text-primary);
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
          }

          p {
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.5;
          }
        }
      }
    }
  `]
})
export class PatientsComponent {}
