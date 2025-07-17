import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, GoogleMapComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('floatingElements', [
      state('*', style({
        transform: 'translateY(0px)'
      })),
      transition('* => *', [
        animate('3s ease-in-out', keyframes([
          style({ transform: 'translateY(0px)', offset: 0 }),
          style({ transform: 'translateY(-10px)', offset: 0.5 }),
          style({ transform: 'translateY(0px)', offset: 1 })
        ]))
      ])
    ]),
    trigger('fadeInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s ease-out')
      ])
    ]),
    trigger('pulseGlow', [
      state('*', style({
        filter: 'drop-shadow(0 0 0px rgba(125, 180, 108, 0.7))'
      })),
      transition('* => *', [
        animate('2s ease-in-out', keyframes([
          style({ filter: 'drop-shadow(0 0 0px rgba(125, 180, 108, 0.7))', offset: 0 }),
          style({ filter: 'drop-shadow(0 0 20px rgba(125, 180, 108, 0.9))', offset: 0.5 }),
          style({ filter: 'drop-shadow(0 0 0px rgba(125, 180, 108, 0.7))', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  
  // 動畫狀態控制
  animationState = 'start';
  
  ngOnInit(): void {
    // 啟動循環動畫
    setInterval(() => {
      this.animationState = this.animationState === 'start' ? 'end' : 'start';
    }, 3000);
  }
  
  clinicInfo = {
    name: '基隆聖德診所',
    doctorName: '王公作醫師',
    phone: '(02) 2429-3939',
    address: '基隆市中山區西定路411號',
    email: 'oflcin@yahoo.com.tw'
  };

  doctorInfo = {
    name: '王公作',
    title: '家庭醫學科專科醫師',
    experience: '20年以上臨床經驗',
    specialties: [
      '家庭醫學',
      '慢性病管理',
      '預防醫學',
      '健康檢查',
      '疫苗接種'
    ],
    certifications: [
      '家庭醫學科專科醫師證書',
      '中華民國醫師執業執照',
      '台灣家庭醫學醫學會會員'
    ]
  };

  services = [
    {
      icon: '🏥',
      title: '家庭醫學科',
      description: '提供全人醫療照護，從預防保健到疾病治療，守護全家人的健康',
      features: ['急性疾病診療', '慢性病管理', '健康諮詢']
    },
    {
      icon: '💉',
      title: '疫苗接種',
      description: '提供各類疫苗接種服務，包含成人及兒童疫苗',
      features: ['流感疫苗', 'COVID-19疫苗', '旅遊疫苗']
    },
    {
      icon: '🩺',
      title: '健康檢查',
      description: '定期健康檢查，早期發現早期治療',
      features: ['基礎健檢', '勞工體檢', '駕照體檢']
    },
    {
      icon: '💊',
      title: '藥事服務',
      description: '專業藥師提供用藥諮詢與藥品配送服務',
      features: ['用藥諮詢', '藥品配送', '慢性病連續處方']
    }
  ];

  clinicHours = [
    { day: '週一', morning: '08:30-12:00', afternoon: '15:00-17:30', evening: '18:30-21:00' },
    { day: '週二', morning: '08:30-12:00', afternoon: '15:00-17:30', evening: '18:30-21:00' },
    { day: '週三', morning: '08:30-12:00', afternoon: '15:00-17:30', evening: '18:30-21:00' },
    { day: '週四', morning: '08:30-12:00', afternoon: '休診', evening: '18:30-21:00' },
    { day: '週五', morning: '08:30-12:00', afternoon: '15:00-17:30', evening: '18:30-21:00' },
    { day: '週六', morning: '08:30-12:00', afternoon: '休診', evening: '休診' },
    { day: '週日', morning: '休診', afternoon: '休診', evening: '休診' }
  ];

  testimonials = [
    {
      content: '王醫師非常細心，每次看診都會詳細解釋病情，讓我很放心。',
      author: '陳小姐',
      condition: '慢性病患者'
    },
    {
      content: '診所環境很乾淨，醫師專業度很高，推薦給大家。',
      author: '李先生',
      condition: '健康檢查'
    },
    {
      content: '王醫師的家庭醫學專業讓全家人都很信任，是我們的家庭醫師。',
      author: '張太太',
      condition: '全家照護'
    }
  ];

  contactMethods = [
    {
      icon: '📞',
      title: '電話預約',
      content: '(02) 2429-3939',
      description: '門診時間內可電話預約',
      action: 'call'
    },
    {
      icon: '📘',
      title: 'FB私訊',
      content: '私訊預約',
      description: 'Facebook私訊預約諮詢',
      action: 'facebook'
    },
    {
      icon: '📧',
      title: 'Email聯絡',
      content: 'oflcin@yahoo.com.tw',
      description: '非急診問題可來信詢問',
      action: 'email'
    }
  ];

  constructor() { }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleContactMethod(method: any): void {
    switch (method.action) {
      case 'call':
        this.callClinic();
        break;
      case 'facebook':
        this.openFacebook();
        break;
      case 'email':
        this.sendEmail();
        break;
    }
  }

  callClinic(): void {
    window.location.href = `tel:${this.clinicInfo.phone}`;
  }

  openFacebook(): void {
    window.open('https://www.facebook.com/Shengdeclinic', '_blank');
  }

  sendEmail(): void {
    window.location.href = `mailto:${this.clinicInfo.email}`;
  }
}
