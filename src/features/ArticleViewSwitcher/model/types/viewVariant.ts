import { type TArticlesView } from 'entities/Article'

export interface IViewVariant {
  view: TArticlesView
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
