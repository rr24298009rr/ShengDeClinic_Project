import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="settings-page fade-in">
      <h1>系統設定</h1>
      
      <div class="settings-grid">
        <div class="card settings-section">
          <div class="section-header">
            <div class="section-icon">🎨</div>
            <h2>外觀設定</h2>
          </div>
          <div class="setting-item">
            <label>主題色彩</label>
            <div class="color-picker">
              <div class="color-option active" style="background: var(--primary)"></div>
              <div class="color-option" style="background: #3498db"></div>
              <div class="color-option" style="background: #9b59b6"></div>
              <div class="color-option" style="background: #e74c3c"></div>
            </div>
          </div>
          <div class="setting-item">
            <label>深色模式</label>
            <div class="toggle-switch">
              <input type="checkbox" id="darkMode">
              <label for="darkMode" class="switch"></label>
            </div>
          </div>
        </div>

        <div class="card settings-section">
          <div class="section-header">
            <div class="section-icon">🔧</div>
            <h2>系統設定</h2>
          </div>
          <div class="setting-item">
            <label>自動儲存</label>
            <div class="toggle-switch">
              <input type="checkbox" id="autoSave" checked>
              <label for="autoSave" class="switch"></label>
            </div>
          </div>
          <div class="setting-item">
            <label>通知提醒</label>
            <div class="toggle-switch">
              <input type="checkbox" id="notifications" checked>
              <label for="notifications" class="switch"></label>
            </div>
          </div>
        </div>

        <div class="card settings-section">
          <div class="section-header">
            <div class="section-icon">👤</div>
            <h2>用戶偏好</h2>
          </div>
          <div class="development-notice">
            <p>更多個人化設定功能開發中...</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .settings-page {
      h1 {
        color: var(--primary-dark);
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--primary), var(--primary-dark));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .settings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
      }

      .settings-section {
        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--neutral-200);

          .section-icon {
            font-size: 1.5rem;
            background: var(--primary);
            color: var(--text-on-primary);
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          h2 {
            color: var(--text-primary);
            margin: 0;
            font-size: 1.3rem;
          }
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid var(--neutral-200);

          &:last-child {
            border-bottom: none;
          }

          label {
            color: var(--text-primary);
            font-weight: 500;
          }

          .color-picker {
            display: flex;
            gap: 0.5rem;

            .color-option {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              cursor: pointer;
              border: 3px solid transparent;
              transition: all 0.3s ease;

              &:hover {
                transform: scale(1.1);
              }

              &.active {
                border-color: var(--text-primary);
                transform: scale(1.1);
              }
            }
          }

          .toggle-switch {
            input[type="checkbox"] {
              display: none;
            }

            .switch {
              position: relative;
              display: inline-block;
              width: 50px;
              height: 25px;
              background-color: var(--neutral-400);
              border-radius: 25px;
              cursor: pointer;
              transition: all 0.3s ease;

              &::before {
                content: '';
                position: absolute;
                top: 2px;
                left: 2px;
                width: 21px;
                height: 21px;
                background-color: white;
                border-radius: 50%;
                transition: all 0.3s ease;
              }
            }

            input:checked + .switch {
              background-color: var(--primary);

              &::before {
                transform: translateX(25px);
              }
            }
          }
        }

        .development-notice {
          padding: 1rem;
          background: var(--neutral-100);
          border-radius: 8px;
          text-align: center;

          p {
            color: var(--text-secondary);
            margin: 0;
            font-style: italic;
          }
        }
      }
    }
  `]
})
export class SettingsComponent {}
