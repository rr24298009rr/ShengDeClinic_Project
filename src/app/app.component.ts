import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // 導航項目進入動畫
    trigger('navItemsAnimation', [
      transition(':enter', [
        query('.nav-link', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ]),
    
    // 導航項目懸停動畫
    trigger('navHover', [
      state('idle', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.05)' })),
      transition('idle <=> hover', animate('0.3s cubic-bezier(0.4, 0, 0.2, 1)'))
    ]),
    
    // 點擊波紋效果
    trigger('ripple', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0.5 }),
        animate('0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ transform: 'scale(1)', opacity: 0 })
        )
      ])
    ]),

    // 標題動畫
    trigger('titleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }),
        animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = '基隆聖德診所';
  currentYear = new Date().getFullYear();
  
  @ViewChild('navContainer', { static: false }) navContainer!: ElementRef;
  
  // 滑鼠跟隨光影的狀態
  mousePosition = { x: 0, y: 0 };
  isMouseOverNav = false;
  
  // 導航項目狀態
  navItemStates: { [key: string]: string } = {};
  
  // 波紋效果狀態
  ripples: Array<{ id: number, x: number, y: number }> = [];
  private rippleId = 0;

  constructor(private router: Router) {
    // 初始化所有導航項目狀態
    const routes = ['/home', '/clinic-hours', '/about', '/family-medicine', 
                   '/self-pay-services', '/health-checkup', '/health-articles', '/contact'];
    routes.forEach(route => {
      this.navItemStates[route] = 'idle';
    });
  }

  ngOnInit(): void {
    // 可以在這裡添加初始化邏輯
  }

  ngAfterViewInit(): void {
    // 設置滑鼠追蹤
    this.setupMouseTracking();
  }

  setupMouseTracking(): void {
    if (this.navContainer) {
      const navElement = this.navContainer.nativeElement;
      
      navElement.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = navElement.getBoundingClientRect();
        this.mousePosition.x = event.clientX - rect.left;
        this.mousePosition.y = event.clientY - rect.top;
        this.updateMouseFollower();
      });
      
      navElement.addEventListener('mouseenter', () => {
        this.isMouseOverNav = true;
      });
      
      navElement.addEventListener('mouseleave', () => {
        this.isMouseOverNav = false;
      });
    }
  }

  updateMouseFollower(): void {
    if (this.isMouseOverNav) {
      const follower = document.querySelector('.mouse-follower') as HTMLElement;
      if (follower) {
        follower.style.transform = `translate(${this.mousePosition.x}px, ${this.mousePosition.y}px)`;
      }
    }
  }

  onNavItemHover(route: string, isHovering: boolean): void {
    this.navItemStates[route] = isHovering ? 'hover' : 'idle';
  }

  handleNavClick(event: MouseEvent, route: string): void {
    // 防止預設的 routerLink 行為
    event.preventDefault();
    event.stopPropagation();
    
    // 創建波紋效果
    this.createRipple(event);
    
    // 特殊處理聯絡我們 - 跳轉到首頁的聯絡區域
    if (route === '/contact') {
      // 先導航到首頁
      this.router.navigate(['/home']).then(() => {
        // 等待頁面渲染完成後滾動到聯絡區域
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 300);
      });
      return;
    }
    
    // 添加輕微延遲確保動畫效果顯示
    setTimeout(() => {
      // 使用 Router 服務進行導航
      this.router.navigate([route]).then(() => {
        // 導航成功後滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }).catch((error) => {
        console.error('Navigation error:', error);
        window.location.href = route;
      });
    }, 200);
  }

  createRipple(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = {
      id: this.rippleId++,
      x: x,
      y: y
    };
    
    this.ripples.push(ripple);
    
    // 在動畫完成後移除波紋
    setTimeout(() => {
      this.ripples = this.ripples.filter(r => r.id !== ripple.id);
    }, 400);
  }
}
