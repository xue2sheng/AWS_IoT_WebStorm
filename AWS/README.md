# AWS IoT

##  [Connect a device](https://eu-west-1.console.aws.amazon.com/iot/home?region=eu-west-1#/connect?thing=LightBulb)

AWS IoT Node.js SDK

Download the [AWS IoT Node.js SDK](https://s3.amazonaws.com/aws-iot-device-sdk-js/aws-iot-device-sdk-js-latest.zip).

Set up the SDK using the instructions in our [README](https://github.com/aws/aws-iot-device-sdk-js/blob/master/README.md) on GitHub.

Add in the following sample code based on your account, Thing, and new certificate:

       {
        "host": "A314ZREJA31T0P.iot.eu-west-1.amazonaws.com",
        "port": 8883,
        "clientId": "LightBulb",
        "thingName": "LightBulb",
        "caCert": "root-CA.crt",
        "clientCert": "17d11b2ca8-certificate.pem.crt",
        "privateKey": "17d11b2ca8-private.pem.key"
       }

Start one of the sample applications found in the SDK. You can use the AWS IoT console to observe the state of your thing's shadow and interact with your device by updating the shadow. Only one device can use a clientID for connecting to the AWS IoT platform at the same time. If you want to connect multiple devices concurrently please create a separate thing (and client certificate) per device that you intend to connect.

## [Updating a Thing Shadow](https://docs.aws.amazon.com/iot/latest/developerguide/using-thing-shadows.html)

You can update a thing shadow by using the UpdateThingShadow RESTful API or by publishing to the /update topic. Updates affect only the fields specified in the request.

Initial state:

      {
       "state": {
                  "reported" : {
                                 "color" : { "r" :255, "g": 255, "b": 0 }    
                               }
                }
      }

An update message is sent:

      {
        "state": {
                   "desired" : {
                                 "color" : { "r" : 10 },
                                 "engine" : "ON"
                               }
                 }
       }

The device receives the desired state on the /update/delta topic that is triggered by the previous /update message and then executes the desired changes. When finished, the device should confirm its updated state through the reported section in the thing shadow JSON document.

Final state:

      {
        "state": {
                   "reported" : {
                                  "color" : {  "r" : 10, "g" : 255, "b": 0 },
                                  "engine" : "ON"
                                }
                 }
      }


