import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="appointments-page fade-in">
      <h1>預約管理</h1>
      <div class="card">
        <div class="card-header">
          <h2>預約行事曆</h2>
          <div class="header-actions">
            <button class="btn btn-outline">
              <span>📅</span>
              今日預約
            </button>
            <button class="btn btn-primary">
              <span>➕</span>
              新增預約
            </button>
          </div>
        </div>
        <div class="development-notice">
          <div class="notice-icon">📅</div>
          <div class="notice-content">
            <h3>預約系統開發中</h3>
            <p>智能預約排程系統正在開發中，將提供線上預約和時間管理功能。</p>
            <div class="feature-preview">
              <span class="feature-item">✓ 線上預約</span>
              <span class="feature-item">✓ 時間衝突檢查</span>
              <span class="feature-item">✓ 自動提醒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .appointments-page {
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

        .header-actions {
          display: flex;
          gap: 1rem;

          .btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }

      .development-notice {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        padding: 2rem;
        background: linear-gradient(135deg, var(--primary), var(--primary-light));
        background-size: 200% 200%;
        animation: gradientShift 4s ease infinite;
        border-radius: 12px;
        color: var(--text-on-primary);

        .notice-icon {
          font-size: 3rem;
          opacity: 0.9;
        }

        .notice-content {
          h3 {
            color: var(--text-on-primary);
            margin: 0 0 0.75rem 0;
            font-size: 1.3rem;
            font-weight: 600;
          }

          p {
            color: rgba(255, 255, 255, 0.9);
            margin: 0 0 1rem 0;
            line-height: 1.6;
          }

          .feature-preview {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;

            .feature-item {
              background: rgba(255, 255, 255, 0.2);
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              font-size: 0.85rem;
              font-weight: 500;
            }
          }
        }
      }

      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    }
  `]
})
export class AppointmentsComponent {}
