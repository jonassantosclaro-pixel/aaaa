export interface Specialty {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface EducationalArticle {
  id: string;
  category: 'idoso' | 'imobilismo' | 'familia' | 'genetica-doenca';
  title: string;
  subtitle?: string;
  summary: string;
  content: string[];
  visualData?: any;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string; // e.g. "Mãe do paciente Lucas", "Paciente Adulto"
  text: string;
  rating: number;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  url: string;
}
