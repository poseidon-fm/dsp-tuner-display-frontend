import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApolloClientOptions, InMemoryCache, split} from '@apollo/client/core';
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {getMainDefinition} from '@apollo/client/utilities';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {SquelchComponent} from './radio-details/settings/squelch/squelch.component';
import {MonoStereoComponent} from './radio-details/settings/mono-stereo/mono-stereo.component';
import {FmsiComponent} from './radio-details/mixed/fmsi/fmsi.component';
import {PingPongComponent} from "./ping-pong/ping-pong.component";
import {Kind, OperationTypeNode} from "graphql/language";
import {RadioDetailsModule} from "./radio-details/radio-details.module";
import {DirtyFlagComponent} from "./templates/dirty-flag.component";
import {ChangeSettingsDispatcherModule} from "./change-settings-dispatcher/change-settings-dispatcher.module";

@NgModule({
  declarations: [
    AppComponent,
    SquelchComponent,
    MonoStereoComponent,
    FmsiComponent,
    PingPongComponent,
    DirtyFlagComponent
  ],
  imports: [
    HttpClientModule,
    ApolloModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    RadioDetailsModule,
    ChangeSettingsDispatcherModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
        // create an http link
        const http = httpLink.create({
          uri: 'http://localhost:8081/graphql',
        });
        // create a websocket link
        // reference => https://www.apollographql.com/docs/react/api/link/apollo-link-subscriptions/
        const ws = new GraphQLWsLink(
          createClient({
            url: "ws://localhost:8081/graphql",
          }),
        );
        // using the ability to split links, you can send data to each link depending on what kind of operation is being sent
        const link = split(
          // split based on operation type
          ({query}) => {
            const definitionNode = getMainDefinition(query)
            const kind = definitionNode.kind
            const operation = kind === Kind.OPERATION_DEFINITION ? definitionNode.operation : null
            return (Kind.OPERATION_DEFINITION === kind && OperationTypeNode.SUBSCRIPTION === operation)
          },
          ws,
          http,
        )

        return {
          cache: new InMemoryCache(),
          link
          // ... options
        }
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
