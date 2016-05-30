# AWS IoT: Connect a device

https://eu-west-1.console.aws.amazon.com/iot/home?region=eu-west-1#/connect?thing=BulbLight



Add in the following sample code based on your account, Thing, and new certificate:

       {
	"host": "A314ZREJA31T0P.iot.eu-west-1.amazonaws.com",
	"port": 8883,
	"clientId": "BulbLight",
	"thingName": "BulbLight",
	"caCert": "root-CA.crt",
	"clientCert": "86ee678ddc-certificate.pem.crt",
	"privateKey": "86ee678ddc-private.pem.key"
       }


