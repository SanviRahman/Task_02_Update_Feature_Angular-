import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {
      "id": 1,
      "parent": null,
      "name": "div",
      "child": [
        {
          "id": 2,
          "parent": 1,
          "name": "div",
          "child": [
            {
              "id": 3,
              "parent": 2,
              "name": "label",
              "text": "Hello world"
            }
          ]
        },
        {
          "id": 4,
          "parent": 1,
          "name": "div",
          "child": [
            {
              "id": 5,
              "parent": 4,
              "name": "div",
              "child": [
                {
                  "id": 6,
                  "parent": 5,
                  "name": "div",
                  "child": [
                    {
                      "id": 7,
                      "parent": 6,
                      "name": "label",
                      "text": "Hello world"
                    }
                  ]
                },
                {
                  "id": 8,
                  "parent": 5,
                  "name": "div",
                  "child": [
                    {
                      "id": 9,
                      "parent": 8,
                      "name": "label",
                      "text": "Hello world"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 10,
          "parent": 1,
          "name": "div",
          "child": [
            {
              "id": 11,
              "parent": 10,
              "name": "label",
              "text": "Hello world"
            }
          ]
        }
      ]
    }
  ];
}
