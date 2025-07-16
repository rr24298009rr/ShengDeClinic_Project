import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reports-page fade-in">
      <h1>報表分析</h1>
      <div class="card">
        <div class="card-header">
          <h2>數據分析儀表板</h2>
          <div class="header-actions">
            <button class="btn btn-outline">
              <span>📊</span>
              匯出報表
            </button>
            <button class="btn btn-secondary">
              <span>⚙️</span>
              報表設定
            </button>
          </div>
        </div>
        <div class="development-notice reports-preview">
          <div class="preview-charts">
            <div class="chart-placeholder">
              <div class="chart-icon">📈</div>
              <span>營收趨勢圖</span>
            </div>
            <div class="chart-placeholder">
              <div class="chart-icon">📊</div>
              <span>病患統計</span>
            </div>
            <div class="chart-placeholder">
              <div class="chart-icon">🎯</div>
              <span>績效指標</span>
            </div>
          </div>
          <div class="notice-content">
            <h3>報表系統開發中</h3>
            <p>詳細的營運報表和數據分析功能正在開發中，將提供完整的商業智能分析。</p>
            <div class="feature-preview">
              <span class="feature-item">✓ 即時數據</span>
              <span class="feature-item">✓ 自訂報表</span>
              <span class="feature-item">✓ 數據視覺化</span>
              <span class="feature-item">✓ 趨勢分析</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .reports-page {
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

      .reports-preview {
        padding: 2rem;
        background: linear-gradient(135deg, var(--neutral-100), var(--neutral-200));
        border-radius: 12px;
        border: 1px solid var(--neutral-300);

        .preview-charts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;

          .chart-placeholder {
            background: var(--bg-primary);
            padding: 2rem 1rem;
            border-radius: 8px;
            text-align: center;
            border: 2px dashed var(--neutral-400);
            transition: all 0.3s ease;

            &:hover {
              border-color: var(--primary);
              transform: translateY(-2px);
            }

            .chart-icon {
              font-size: 2.5rem;
              margin-bottom: 0.5rem;
              display: block;
            }

            span {
              color: var(--text-secondary);
              font-weight: 500;
              font-size: 0.9rem;
            }
          }
        }

        .notice-content {
          h3 {
            color: var(--text-primary);
            margin: 0 0 0.75rem 0;
            font-size: 1.2rem;
            font-weight: 600;
          }

          p {
            color: var(--text-secondary);
            margin: 0 0 1rem 0;
            line-height: 1.6;
          }

          .feature-preview {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;

            .feature-item {
              background: var(--primary);
              color: var(--text-on-primary);
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              font-size: 0.85rem;
              font-weight: 500;
            }
          }
        }
      }
    }
  `]
})
export class ReportsComponent {}
