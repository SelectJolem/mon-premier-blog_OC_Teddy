import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-blog';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque ad eum locum ubi aliquando pastae sunt revertuntur, ita homines instar turbinis degressi montibus impeditis et arduis loca petivere mari confinia, ',
      loveIts: 3,
      created_at: '2019-04-03 12:34'
    },
    {
      title: 'Mon deuxième post',
      content: 'Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque ad eum locum ubi aliquando pastae sunt revertuntur, ita homines instar turbinis degressi montibus impeditis et arduis loca petivere mari confinia, ',
      loveIts: -2,
      created_at: '2019-04-03 12:34'
    },
    {
      title: 'Encore un post',
      content: 'Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque ad eum locum ubi aliquando pastae sunt revertuntur, ita homines instar turbinis degressi montibus impeditis et arduis loca petivere mari confinia, ',
      loveIts: 0,
      created_at: '2019-04-02 12:34'
    }
  ];
}
