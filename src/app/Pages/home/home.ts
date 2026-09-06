import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Showcase } from '../../components/showcase/showcase';
import { Button } from '../../components/button/button';
import { CtaSection } from "../../components/cta-section/cta-section";
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Hero, Showcase, CtaSection, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

}
