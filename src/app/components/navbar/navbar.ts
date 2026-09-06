import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  showLinks = true;

  ImageUrl = "https://prium.github.io/Posh/v2.1.0/assets/images/posh-logo.png"

  navLink = [
    {label: "Home", links: "/" },
    {label: "About", links: "/about"  },
    {label: "Pages", links: "#" },
    {label: "Docs", links: "#" }
  ]


}
